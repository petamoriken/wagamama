const path = require("path");
const fs = require("fs");

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const pngquant = require("imagemin-pngquant");

const svelte = require("svelte");

const postcss = require("postcss");
const url = require("postcss-url");
const autoprefixer = require("autoprefixer");

const isDebug = process.env.NODE_ENV !== "release";
const output = "build/" + (isDebug ? "debug" : "release");

gulp.task("static", () => {
    if(isDebug) {
        return gulp.src(["src/**", "!src/component/**"], { since: gulp.lastRun("static") })
            .pipe(gulp.dest(output));
    }

    return Promise.all([
        new Promise(resolve => gulp.src(["src/**", "!src/component/**", "!src/**/*.png"], { since: gulp.lastRun("static") })
            .pipe(gulp.dest(output))
            .on("end", resolve)
        ),
        new Promise(resolve => gulp.src("src/**/*.png", { since: gulp.lastRun("static") })
            .pipe($.imagemin(
                [pngquant({quality: "40-70", speed: 1})]
            )).pipe(gulp.dest(output))
            .on("end", resolve)
        )
    ]);
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
        })).pipe(gulp.dest(`${ output }/component`))
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

gulp.task("default", gulp.parallel("static", "component"));