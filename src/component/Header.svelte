<header class={{ isMenuOpen ? "open" : "" }}>
    <div class="wrapper">
        <a href="./"><img src="img/accessory/logo.png"></a>
        {{ #if isMobileView }}
            <button on:tap="set({ isMenuOpen: !isMenuOpen })"><img src="img/button/menu.png" alt="メニューボタン"></button>
        {{ /if }}
        <nav hidden={{ isMobileView && !isMenuOpen }}>
            <ul role={{ isMobileView ? "menu" : "" }}>
                {{ #each items as item }}
                    <li role={{ isMobileView ? "menuitem" : "" }}>
                        <a href="{{ item.id }}.html"><img src="img/button/{{ item.id }}.png" alt={{ item.alt }}></a>
                    </li>
                {{ /each }}
            </ul>
        </nav>
    </div>
</header>
<div class="stagehand"></div>

<style>
    header {
        width: 100%;
        position: absolute;
        background:
            url("img/background/header.png") 0 100% repeat-x,
            url("img/background/header_loop.png") 0 calc(100% - 147px) repeat-x,
            url("img/background/header_loop.png") 0 calc(100% - 294px) repeat-x;
        z-index: 1000;
    }

    [hidden] {
        display: none;
    }

    .stagehand {
        width: 100%;
        height: 70px;
    }

    .wrapper {
        width: 1000px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        padding: 10px 0 0;
    }

    .wrapper > a img {
        height: 90px;
    }

    button {
        width: 54px;
        height: 52px;
        padding: 0;
        border: 0;
        background: unset;
    }

    ul {
        display: flex;
        width: 800px;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    ul li {
        margin: 2px;
    }

    ul > li img {
        width: 130px;
    }

    @media screen and (max-width: 740px) {
        .open {
            padding-bottom: 20px;
        }

        .wrapper {
            width: calc(100% - 40px);
            margin: 0 auto;
        }

        ul {
            width: 100%;
            flex-wrap: wrap;
        }
    }
</style>

<script>
    const threshold = 740;

    export default {
        data() {
            return {
                isMobileView: window.innerWidth <= threshold,
                isMenuOpen: false,
                items: [
                    { id: "story", alt: "ストーリー" },
                    { id: "system", alt: "ゲームシステム" },
                    { id: "character", alt: "キャラクター" },
                    { id: "download", alt: "ダウンロード" },
                    { id: "movie", alt: "ムービー" },
                    { id: "contact", alt: "コンタクト" }
                ]
            }
        },

        methods: {
            resizeHandler() {
                const isMobileView = window.innerWidth <= threshold;

                if(this.get("isMobileView") !== isMobileView) {
                    this.set({
                        isMobileView,
                        isMenuOpen: false
                    });
                }
            }
        },

        oncreate() {
            const handler = this.boundResizeHandler = e => this.resizeHandler(e);
            window.addEventListener("resize", handler);
        },

        ondestroy() {
            window.removeEventListener("resize", this.boundResizeHandler);
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