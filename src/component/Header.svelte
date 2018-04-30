<header class="{ isMenuOpen ? 'open' : '' }">
    <div class="wrapper">
        <a href="./"><img src="img/accessory/logo.png" srcset="img/accessory/logo@2x.png 2x" alt="ロゴ"></a>
        { #if isMobileView }
            <button on:tap="set({ isMenuOpen: !isMenuOpen })"><img src="img/button/menu.png" srcset="img/button/menu@2x.png 2x" alt="メニューボタン"></button>
        { /if }
        <nav hidden="{ isMobileView && !isMenuOpen }">
            <ul role="{ isMobileView ? 'menu' : '' }">
                { #each items as item }
                    <li role="{ isMobileView ? 'menuitem' : '' }">
                        <a href="{ item.id }.html"><img src="{ item.image.src }" srcset="{ item.image.srcset }" alt="{ item.image.alt }"></a>
                    </li>
                { /each }
            </ul>
        </nav>
    </div>
</header>
<div class="stagehand"></div>

<style>
    header {
        width: 100%;
        position: absolute;
        background: url("img/background/header.png") 0 100% repeat-x;
        z-index: 1000;
    }

    @media screen and (min-resolution: 2dppx) {
        header {
            background: url("img/background/header@2x.png") 0 100%/944px 147px repeat-x;
        }
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
        header {
            background:
                url("img/background/header.png") 0 100% repeat-x,
                url("img/background/header_loop.png") 0 calc(100% - 147px) repeat-x,
                url("img/background/header_loop.png") 0 calc(100% - 294px) repeat-x;
        }

        nav {
            margin-top: 20px;
        }

        .open {
            padding-bottom: 49px;
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

    @media screen and (max-width: 740px) and (min-resolution: 2dppx) {
        header {
            background:
                url("img/background/header@2x.png") 0 100%/944px 147px repeat-x,
                url("img/background/header_loop@2x.png") 0 calc(100% - 147px)/944px 294px repeat-x,
                url("img/background/header_loop@2x.png") 0 calc(100% - 294px)/944px 294px repeat-x;
        }
    }
</style>

<script>
    const media = matchMedia("screen and (max-width: 740px)");

    export default {
        data() {
            return {
                isMobileView: media.matches,
                isMenuOpen: false,
                items: [
                    { id: "story", image: { src: "img/button/story.png", srcset: "img/button/story@2x.png 2x", alt: "ストーリー" } },
                    { id: "system", image: { src: "img/button/system.png", srcset: "img/button/system@2x.png 2x", alt: "ゲームシステム" } },
                    { id: "character", image: { src: "img/button/character.png", srcset: "img/button/character@2x.png 2x", alt: "キャラクター" } },
                    { id: "download", image: { src: "img/button/download.png", srcset: "img/button/download@2x.png 2x", alt: "ダウンロード" } },
                    { id: "movie", image: { src: "img/button/movie.png", srcset: "img/button/movie@2x.png 2x", alt: "ムービー" } },
                    { id: "contact", image: { src: "img/button/contact.png", srcset: "img/button/contact@2x.png 2x", alt: "コンタクト" } },
                ],
            };
        },

        methods: {
            updateIsMobileViewByMediaQuery() {
                const { isMobileView } = this.get();
                const changedIsMobileView = media.matches;
                if (isMobileView === changedIsMobileView) { return; }

                this.set({
                    isMobileView: changedIsMobileView,
                    isMenuOpen: false,
                });
            },
        },

        oncreate() {
            const mediaHandler = this.mediaHandler = () => this.updateIsMobileViewByMediaQuery();

            // Safari 11.3 では MediaQueryList#addEventListener にまだ対応していない
            media.addListener(mediaHandler);
        },

        ondestroy() {
            media.removeListener(this.mediaHandler);
        },

        events: {
            tap(node, callback) {
                if ("ontouchstart" in window) {
                    const hasPointerEvent = "onpointerdown" in window;

                    const startHandler = hasPointerEvent ? "pointerdown" : "touchstart";
                    const endHandler = hasPointerEvent ? "pointerup" : "touchend";
                    const moveHandler = hasPointerEvent ? "pointermove" : "touchmove";

                    const onstart = e => {
                        let isTap = true;

                        const onmove = e => {
                            isTap = false;
                        }
                        node.addEventListener(moveHandler, onmove);

                        node.addEventListener(endHandler, e => {
                            if (isTap) {
                                callback(e);
                            }
                            node.removeEventListener(moveHandler, onmove);
                        }, { once: true });
                    }
                    node.addEventListener(startHandler, onstart);

                    return {
                        destroy() {
                            node.removeEventListener(startHandler, onstart);
                        }
                    };
                } else {
                    const onclick = e => callback(e);
                    node.addEventListener("click", onclick);

                    return {
                        destroy() {
                            node.removeEventListener("click", onclick);
                        }
                    };
                }
            },
        },
    };
</script>