const util = require("util");
const path = require("path");
const fs = require("fs");
const assert = require("assert");

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const pngquant = require("imagemin-pngquant");

const svelte = require("svelte");

const postcss = require("postcss");
const url = require("postcss-url");
const autoprefixer = require("autoprefixer");

const Client = require("ftp");

const isDebug = process.env.NODE_ENV !== "release";
const output = "build/" + (isDebug ? "debug" : "release");
const connection = 4;

gulp.task("static", () => {
    if(isDebug) {
        return gulp.src(["src/**", "!src/component/**", "!src/**/*.png"], { since: gulp.lastRun("static") })
            .pipe(gulp.dest(output));
    }

    return new Promise(resolve => gulp.src(["src/**", "!src/component/**", "!src/**/*.png"], { since: gulp.lastRun("static") })
        .pipe(gulp.dest(output))
        .on("end", resolve)
    );
});

gulp.task("asset", () => {
    if(isDebug) {
        return gulp.src(["src/**/*.png"], { since: gulp.lastRun("static") })
            .pipe(gulp.dest(output));
    }

    return gulp.src("src/**/*.png", { since: gulp.lastRun("static") })
        .pipe($.imagemin(
            [pngquant({quality: "40-70", speed: 1})]
        )).pipe(gulp.dest(output));
});

gulp.task("component", () => {
    let css = "";

    return new Promise(resolve => gulp.src("src/component/**", { since: gulp.lastRun("component") })
        .pipe($.plumber())
        .pipe($.each((content, file, cb) => {
            const { name, base, dir } = path.parse(file.path);
            const filename = `component/${ base }`;

            try {
                const { code, css: _css } = svelte.compile(content, {
                    format: "iife",
                    filename,
                    name,
                    css: isDebug,
                });
                css += _css;
                file.path = path.resolve(dir, name + ".js");
                cb(null, code);
            } catch(e) {
                cb(e);
            }
        })).pipe($.if(() => !isDebug, $.babelMinify()))
        .pipe(gulp.dest(`${ output }/component`))
        .on("end", () => {
            const outputPath = path.resolve(__dirname, output, "component/style.css");

            if(isDebug) {
                fs.writeFileSync(outputPath, "");
                resolve()
                return;
            }
            postcss([
                url({ url: "rebase" }),
                autoprefixer
            ]).process(css, {
                from: "style.css",
                to: "component/style.css"
            }).then(result => {
                fs.writeFileSync(outputPath, result);
                resolve();
            });
        })
    );
});

gulp.task("watch", () => {
    gulp.watch(["src/**", "!src/component/**"], gulp.series("static"));
    gulp.watch("src/component/**", gulp.series("component"));
});

gulp.task("default", gulp.parallel("static", "asset", "component"));


gulp.task("deploy", async () => {
    assert(!isDebug, "deploy task must be executed in release mode");

    const client = new Client();
    client.connect({
        secure: true,
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD
    });
    const ready = new Promise((resolve, reject) => client.on("ready", error => error ? reject(error) : resolve()));

    const readdir = util.promisify(fs.readdir);
    const stat = util.promisify(fs.stat);
    const { filelist, dirlist } = await (async function walk(dir, filelist = [], dirlist = []) {
        const files = await readdir(dir);
        dirlist.push(dir);
        await Promise.all(files.map(async file => {
            // remove environment files
            if(file.startsWith(".")) {
                return;
            }

            const filename = `${ dir }/${ file }`;
            if((await stat(filename)).isDirectory()) {
                await walk(filename, filelist, dirlist);
            } else {
                filelist.push(filename);
            }
        }));
        return { filelist, dirlist };
    })(output);

    await ready;
    await Promise.all(dirlist.map(dirname => {
        return new Promise((resolve, reject) => {
            if(dirname === output) {
                resolve();
                return;
            }
            client.mkdir(dirname.replace(output + "/", ""), true, error => error ? reject(error) : resolve());
        });
    }));

    await new Promise(resolve => {
        const fileCount = filelist.length;

        let count = 0;
        let resolveCount = 0;
        for(let i = 0; i < connection; ++i) {
            (async function next() {
                const filename = filelist[count++];
                if(!filename) {
                    if(resolveCount === fileCount) {
                        resolve();
                    }
                    return;
                }

                await new Promise((resolve, reject) => {
                    client.put(filename, filename.replace(output + "/", ""), error => error ? reject(error) : resolve());
                });
                ++resolveCount;
                next();
            })();
        }
    });
    client.end();
});