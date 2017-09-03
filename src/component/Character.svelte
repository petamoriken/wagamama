<main>
    <style ref:style></style>
    <div class="wrapper">
        <h1><img src="img/heading/character.png" alt="キャラクター"></h1>
        <hr>
        <nav>
            <button on:tap="set({ displayedListRow: displayedListRow-1 })"><img src="img/arrow_left.png" alt="左へ移動"></button>
            <button on:tap="set({ displayedListRow: displayedListRow+1 })"><img src="img/arrow_right.png" alt="右へ移動"></button>
            <menu ref:menu>
                {{ #each characters as character, index }}
                    <li role="munuitemradio" aria-selected="{{ index === current }}"><a on:tap="set({ current: index })" href="#{{ character.id }}"><img src="img/character/chip/{{ character.id }}.png" alt="{{ character.name.ja }} キャラチップ"></a></li>
                {{ /each }}
            </menu>
        </nav>
        <figure>
            <figcaption>
                <h2><img src="img/character/name/{{ characters[current].id }}.png" alt="{{ characters[current].name.ja }}"></h2>
                <hr>
                <div class="subtext">
                    <p>cv.{{ characters[current].cv }}</p>
                    <p>{{ characters[current].name.en }}</p>
                </div>
                <div class="description">
                    <p>{{ characters[current].description }}</p>
                </div>
            </figcaption>
            <img src="img/character/{{ characters[current].id }}.png" alt="{{ characters[current].name.ja }} 立ち絵">
        </figure>
    </div>
</main>

<style>
    main {
        width: 100%;
        color: white;
    }

    .wrapper {
        width: 100%;
        margin: 0 auto;
        padding: 60px 0 0;
    }

    h1 {
        margin: 0 0 0 20px;
    }

    .wrapper > hr {
        width: 100%;
        height: 27px;
        position: absolute;
        left: 0;
        margin: 0;
        border: 0;
        background: url("img/border.png");
    }

    nav {
        margin: 47px 0 0;
        position: relative;
        z-index: 100;
    }

    nav > button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0;
        border: 0;
        background: unset;
        cursor: pointer;
    }

    nav > button:nth-of-type(1) {
        left: 10px;
    }

    nav > button:nth-of-type(2) {
        right: 10px;
    }

    menu {
        width: 100%;
        height: 128px;
        box-sizing: border-box;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        padding: 0 80px;
        font-size: 0;
    }

    li {
        margin: 0;
        padding: 0;
        flex-grow: 1;
        text-align: center;
    }

    li > button {
        padding: 0;
        border: 0;
        background: unset;
    }

    li img {
        vertical-align: top;
    }

    li[aria-selected="false"] img {
        opacity: 0.6;
    }

    li[aria-selected="false"] img:hover {
        opacity: 1;
    }

    figure {
        position: relative;
        top: -50px;
        margin: 0 0 -50px;
        display: flex;
        align-items: flex-start;
    }

    figcaption {
        width: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 180px 0 0;
    }

    h2 {
        margin: 0;
        align-self: flex-end;
    }

    figcaption > hr {
        width: 100%;
        margin: 0;
    }

    .subtext {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .subtext > p {
        margin: 10px 20px;
    }

    .description {
        width: 360px;
        height: 270px;
        padding: 70px 40px 25px;
        color: black;
        box-sizing: border-box;
        background: url("img/comment.png");
    }

    .description > p {
        line-height: 1.5em;
    }

    @media screen and (max-width: 740px) {
        menu {
            padding: 0 55px;
        }

        figure {
            top: auto;
            margin: 20px 0 0;
            flex-direction: column;
            align-items: center;
        }

        figcaption {
            max-width: 80%;
            margin-top: 0;
        }

        .description {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }

        figure > img {
            max-width: 95%;
        }
    }
</style>

<script>
    const imageWidth = 129;

    function requestAfterAnimationFrame(callback) {
        requestAnimationFrame(function() {
            requestAnimationFrame(callback);
        });
    }

    export default {
        data() {
            return {
                displayedListRow: 0,
                displayedMaxListItem: 6,
                current: 0,
                characters: [
                    { id: "alice", name: { ja: "アリス", en: "Alice" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "chishier", name: { ja: "チシャ", en: "Chishier" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "kuro", name: { ja: "クロ", en: "Kuro" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "meisie", name: { ja: "メイジー", en: "Meisie" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "triaina", name: { ja: "トリアイナ", en: "Triaina" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "orivia", name: { ja: "オリヴィア", en: "Orivia" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "helen", name: { ja: "ヘレン", en: "Helen" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "dood", name: { ja: "ドード", en: "Dood" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "karton", name: { ja: "カートン", en: "Karton" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "marger", name: { ja: "マルゲル", en: "Marger" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "charlotte", name: { ja: "シャルロッテ", en: "Charlotte" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "ema", name: { ja: "エマ", en: "Ema" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "emil", name: { ja: "エミル", en: "Emil" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "kasumi", name: { ja: "カスミ", en: "Kasumi" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "pumpking", name: { ja: "パンプキング", en: "Pumpking" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "akari", name: { ja: "アカリ", en: "Akari" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "pumpkingfour", name: { ja: "パンプキング・フォー", en: "Pumpkingfour" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "lily", name: { ja: "リリィ", en: "Lily" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "mig", name: { ja: "ミグ", en: "Mig" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "messerschmitt", name: { ja: "メッサーシュミット", en: "Messerschmitt" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "vega", name: { ja: "ベガ", en: "Vega" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "raisa", name: { ja: "ライザ", en: "Raisa" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "nia", name: { ja: "ニア", en: "Nia" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "veronica", name: { ja: "ヴェロニカ", en: "Veronica" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "eri", name: { ja: "エリ", en: "Eri" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "seedle", name: { ja: "シードル", en: "Seedle" }, cv: "CV名", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" }
                ]
            };
        },

        methods: {
            displayedListRowSubsciber(displayedListRow) {
                const element = this.refs.menu;
                const height = element.firstElementChild.clientHeight
                const length = element.scrollHeight / height | 0;

                displayedListRow %= length;
                if(displayedListRow < 0) {
                    displayedListRow += length;
                }

                element.scrollTop = height * displayedListRow;
            },

            refreshDisplayedListItem() {
                const element = this.refs.menu;
                const width = element.offsetWidth;

                const style = getComputedStyle(element);
                const paddingLeft = Number.parseFloat(style.paddingLeft);
                const paddingRight = Number.parseFloat(style.paddingRight);

                const displayedMaxListItem = (width - paddingLeft - paddingRight) / imageWidth | 0;

                if(this.get("displayedMaxListItem") !== displayedMaxListItem) {
                    this.set({
                        displayedMaxListItem,
                        displayedListRow: this.get("current") / displayedMaxListItem | 0
                     });

                    // 最後の行を左寄せにする
                    if(displayedMaxListItem !== 1) {
                        const rest = displayedMaxListItem - this.get("characters").length % displayedMaxListItem;
                        this.refs.style.textContent = `menu::after { content: ""; flex: ${ rest } 1 ${ imageWidth * rest }px; }`;
                    } else {
                        this.refs.style.textContent = "";
                    }
                }
            }
        },

        oncreate() {
            this.refreshDisplayedListItem();

            // arrow がクリックされて displayedListRow が変更されるのを監視する
            this.observe("displayedListRow", this.displayedListRowSubsciber, { init: false });

            // location.href で初期値の設定
            const index = this.get("characters").findIndex(children => `#${ children.id }` === location.hash);
            if(index !== -1) {
                this.set({
                    current: index
                });
                requestAfterAnimationFrame(() => {
                    this.set({
                        displayedListRow: index / this.get("displayedMaxListItem") | 0
                    });
                });
            }

            // menu のリサイズを監視して refreshDisplayedListItem を呼ぶ
            const element = this.refs.menu;
            let oldWidth = element.offsetWidth;
            const resizeHandler = this.resizeHandler = () => {
                const currentWidth = element.offsetWidth;
                if(currentWidth === oldWidth) {
                    return;
                }
                this.refreshDisplayedListItem();
                oldWidth = currentWidth;
            }
            window.addEventListener("resize", resizeHandler);
        },

        ondestroy() {
            window.removeEventListener("resize", this.resizeHandler);
        },

        events: {
            tap(node, callback) {
                if("ontouchstart" in window) {
                    const ontouchstart = e => {
                        let isTap = true;

                        const ontouchmove = e => {
                            isTap = false;
                        }

                        node.addEventListener("touchmove", ontouchmove);

                        node.addEventListener("touchend", e => {
                            if(isTap) {
                                callback(e);
                            }
                            node.removeEventListener("touchmove", ontouchmove);
                        }, { once: true });
                    }

                    node.addEventListener("touchstart", ontouchstart);

                    return {
                        teardown() {
                            node.removeEventListener("touchstart", ontouchstart);
                        }
                    };
                } else {
                    const onclick = e => callback(e);

                    node.addEventListener("click", onclick);

                    return {
                        teardown() {
                            node.removeEventListener("click", onclick);
                        }
                    };
                }
            }
        }
    };
</script>

