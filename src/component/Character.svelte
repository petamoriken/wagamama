<main>
    <style ref:style></style>
    <div class="wrapper">
        <h1><img src="img/heading/character.png" alt="キャラクター"></h1>
        <hr>
        <nav>
            <button on:tap="set({ displayedListRow: displayedListRow-1 })"><img src="img/arrow_left.png" alt="左へ移動"></button>
            <button on:tap="set({ displayedListRow: displayedListRow+1 })"><img src="img/arrow_right.png" alt="右へ移動"></button>
            <menu ref:characters>
                {{ #each characters as character, index }}
                    <li role="munuitemradio" aria-selected="{{ index === current }}"><a href="#{{ character.id }}"><img src="img/character/chip/{{ character.id }}.png" alt="{{ character.alt }} キャラチップ"></a></li>
                {{ /each }}
            </menu>
        </nav>
    </div>
</main>

<style>
    main {
        width: 100%;
    }

    .wrapper {
        width: 1100px;
        margin: 0 auto;
        padding: 60px 0 0;
    }

    h1 {
        margin: 0 0 0 20px;
    }

    hr {
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
        opacity: 0.8;
    }

    li[aria-selected="false"] img:hover {
        opacity: 1;
    }
</style>

<script>
    const imageWidth = 128;

    export default {
        data() {
            return {
                displayedListRow: 0,
                displayedMaxListItem: 6,
                current: 0,
                characters: [
                    { id: "alice", alt: "アリス", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "chishier", alt: "チシャ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "kuro", alt: "クロ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "meisie", alt: "メイジー", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "triaina", alt: "トリアイナ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "orivia", alt: "オリヴィア", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "helen", alt: "ヘレン", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "dood", alt: "ドード", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "karton", alt: "カートン", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "marger", alt: "マルゲル", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "charlotte", alt: "シャルロッテ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "ema", alt: "エマ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "emil", alt: "エミル", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "kasumi", alt: "カスミ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "pumpking", alt: "パンプキング", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "akari", alt: "アカリ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "pumpkingfour", alt: "パンプキング・フォー", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "lily", alt: "リリィ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "mig", alt: "ミグ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "messerschmitt", alt: "メッサーシュミット", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "vega", alt: "ベガ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "raisa", alt: "ライザ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "nia", alt: "ニア", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "veronica", alt: "ヴェロニカ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "eri", alt: "エリ", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" },
                    { id: "seedle", alt: "シードル", description: "キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文キャラクターの紹介文" }
                ]
            };
        },

        methods: {
            displayedListRowSubsciber(displayedListRow) {
                const element = this.refs.characters;
                const height = element.firstElementChild.clientHeight
                const length = element.scrollHeight / height | 0;

                displayedListRow %= length;
                if(displayedListRow < 0) {
                    displayedListRow += length;
                }

                element.scrollTop = height * displayedListRow;
            },

            refreshDisplayedListItem() {
                const element = this.refs.characters;
                const width = element.offsetWidth;

                const style = getComputedStyle(element);
                const paddingLeft = Number.parseFloat(style.paddingLeft);
                const paddingRight = Number.parseFloat(style.paddingRight);

                const displayedMaxListItem = (width - paddingLeft - paddingRight) / imageWidth | 0;

                if(this.get("displayedMaxListItem") !== displayedMaxListItem) {
                    const rest = displayedMaxListItem - this.get("characters").length % displayedMaxListItem;
                    this.refs.style.textContent = `menu::after { content: ""; flex: ${ rest } 1 ${ (imageWidth + 1) * rest }px; }`;
                    this.set({ displayedMaxListItem });
                }
            }
        },

        oncreate() {
            this.refreshDisplayedListItem();
            this.observe("displayedListRow", this.displayedListRowSubsciber, { init: false });

            const index = this.get("characters").findIndex(children => `#${ children.id }` === location.hash);
            if(index !== -1) {
                this.set({
                    current: index
                });
                // delay for scrollHeight
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        this.set({
                            displayedListRow: index / this.get("displayedMaxListItem") | 0
                        });
                    });
                });
            }
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
                    const onclick = e => {
                        callback(e);
                    }

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

