<main>
    <div class="wrapper">
        <h1><img src="img/heading/system.png" srcset="img/heading/system@2x.png 2x" alt="ゲームシステム"></h1>
        <nav>
            <menu type="toolbar">
                {{ #each items as item, i }}
                    <li aria-current="{{ current === i ? 'page' : '' }}">
                        <a href="#{{ item.id }}"><img src="{{ item.image.src }}" srcset="{{ item.image.srcset }}" alt={{ item.image.alt }}></a>
                    </li>
                {{ /each }}
            </menu>
        </nav>
        <hr>
        <div class="gallery {{ items[current].id }}">
            {{ #each contents[items[current].id] as content }}
                <section>
                    <h2><img src="{{ content.heading.src }}" srcset="{{ content.heading.srcset}}" alt="{{ content.heading.alt }}"></h2>
                    {{ #if content.texts !== null }}
                        <p>
                            {{ #each content.texts as text }}
                                {{ text }}<br>
                            {{ /each }}
                        </p>
                    {{ /if }}
                    <div class="thumbnail">
                        {{ #each content.images as image }}
                            <div>
                                {{ #if image.href }}
                                    <a href="{{ image.href }}">
                                        <img src="{{ image.src }}" srcset="{{ image.srcset }}" alt="{{ image.alt }}">
                                    </a>
                                {{ else }}
                                    <img src="{{ image.src }}" srcset="{{ image.srcset }}" alt="{{ image.alt }}">
                                {{ /if }}
                                {{ #if image.sub }}
                                    <img class="sub" src="{{ image.sub.src }}" srcset="{{ image.sub.srcset }}" alt="{{ image.sub.alt }}">
                                {{ /if }}
                            </div>
                        {{ /each }}
                    </div>
                </section>
            {{ /each }}
        </div>
    </div>
</main>

<style>
    .wrapper {
        width: 1100px;
        margin: 0 auto;
        padding: 60px 0 0;
        color: #eee;
    }

    h1 {
        position: absolute;
        transform: translateY(24px);
        margin: 0 0 0 20px;
    }

    hr {
        width: 100%;
        height: 27px;
        position: absolute;
        left: 0;
        margin: 0;
        border: 0;
        background: url("img/background/border.png");
    }

    @media screen and (min-resolution: 2dppx) {
        hr {
            background: url("img/background/border@2x.png") 0/auto 100%;
        }
    }

    menu {
        width: 384px;
        position: relative;
        top: 8px;
        display: flex;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        justify-content: space-between;
    }

    menu li[aria-current="page"] {
        position: relative;
        z-index: 100;
    }

    section {
        margin: 50px 0;
        text-align: center;
    }

    h2 {
        position: relative;
        margin: 15px 0;
        z-index: 200;
    }

    p {
        position: relative;
        margin: 15px 0;
        line-height: 1.7em;
        z-index: 200;
    }

    .thumbnail {
        margin: 5px 0;
    }

    .thumbnail > div {
        display: inline-block;
        position: relative;
    }

    .thumbnail img {
        margin: 2.5px;
    }

    .thumbnail .sub {
        position: absolute;
        pointer-events: none;
    }

    .battle .thumbnail .sub {
        top: 10px;
        left: -30px;
    }

    .drama .thumbnail .sub {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }

    /* for PC */
    @media screen and (min-width: 740px) {
        .battle > section:nth-of-type(2) .thumbnail {
            width: 750px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .battle > section:nth-of-type(2) .thumbnail img {
            margin: 0;
        }

        .battle > section:nth-of-type(2) > .thumbnail div:nth-of-type(1) {
            align-self: flex-start;
        }

        .battle > section:nth-of-type(2) > .thumbnail div:nth-of-type(2) {
            align-self: flex-end;
            margin-top: -90px;
        }

        .battle > section:nth-of-type(2) > .thumbnail div:nth-of-type(3) {
            align-self: flex-start;
            margin-left: 100px;
            margin-top: -30px;
        }

        .battle > section:nth-of-type(3) .thumbnail {
            margin-top: -140px;
            z-index: -10;
        }

        .battle > section:nth-of-type(3) .thumbnail img {
            transform: translateX(195px);
        }

        .drama .thumbnail {
            width: 750px;
            margin: 0 auto;
        }
    }

    /* for Phone */
    @media screen and (max-width: 740px) {
        .wrapper {
            width: 100%;
        }

        h1 {
            display: none;
        }

        menu {
            max-width: 100%;
            justify-content: space-around;
        }

        menu li {
            max-width: 30%;
        }

        menu img {
             max-width: 100%;
        }

        h2 img {
            max-width: 100%;
        }

        p {
            text-align: justify;
            padding: 0 10px;
        }

        p br {
            display: none;
        }

        .thumbnail img {
            max-width: 90%;
        }

        .battle .thumbnail .sub {
            top: 10px;
            left: 0;
        }
    }
</style>

<script>
    const items = Object.freeze([
        { id: "field", image: { src: "img/button/field.png", srcset: "img/button/field@2x.png 2x", alt: "フィールド" } },
        { id: "battle", image: { src: "img/button/battle.png", srcset: "img/button/battle@2x.png 2x", alt: "バトル" } },
        { id: "drama", image: { src: "img/button/drama.png", srcset: "img/button/drama@2x.png 2x", alt: "ドラマシーン" } }
    ]);

    const contents = Object.freeze({
        field: [
            {
                heading: { src: "img/text/system_field01.png", srcset: "img/text/system_field01@2x.png 2x", alt: "広大な世界を蹂躙せよ" },
                texts: ["104の領地からなる広大な世界を侵略していくのがこのゲームの目的です。", "兵数をふやしたり、装備を買ったりしてユニットを鍛え、圧倒的な力で敵を侵略しよう。"],
                images: [
                    { href: "img/system/field01.png", src: "img/thumbnail/system_field01.png", srcset: "img/thumbnail/system_field01@2x.png 2x", alt: "マップ画面1" },
                    { href: "img/system/field02.png", src: "img/thumbnail/system_field02.png", srcset: "img/thumbnail/system_field02@2x.png 2x", alt: "マップ画面2" },
                    { href: "img/system/field03.png", src: "img/thumbnail/system_field03.png", srcset: "img/thumbnail/system_field03@2x.png 2x", alt: "マップ画面3" }
                ]
            },
            {
                heading: { src: "img/text/system_field02.png", srcset: "img/text/system_field02@2x.png 2x", alt: "軍団を強化しよう" },
                texts: ["敵の領地を侵略するために自分の軍団を強くする必要があります。", "経験値をためてレベルを上げたり、兵士の数を増やしたり、", "装備を変えたりとユニットをカスタマイズして軍団を強くしよう。"],
                images: [
                    { href: "img/system/field04.png", src: "img/thumbnail/system_field04.png", srcset: "img/thumbnail/system_field04@2x.png 2x", alt: "軍団拡張画面1" },
                    { href: "img/system/field05.png", src: "img/thumbnail/system_field05.png", srcset: "img/thumbnail/system_field05@2x.png 2x", alt: "軍団拡張画面2" },
                ]
            },
            {
                heading: { src: "img/text/system_field03.png", srcset: "img/text/system_field03@2x.png 2x", alt: "軍団を強化しよう" },
                texts: ["メニュー画面から町へ繰り出すことができます。", "町では装備や戦闘の役に立つカードを購入できたり、", "キャラクターたちのショートエピソードを楽しむことが出来ます。"],
                images: [
                    { href: "img/system/field06.png", src: "img/thumbnail/system_field06.png", srcset: "img/thumbnail/system_field06@2x.png 2x", alt: "町へ行く1" },
                    { href: "img/system/field07.png", src: "img/thumbnail/system_field07.png", srcset: "img/thumbnail/system_field07@2x.png 2x", alt: "町へ行く2" },
                    { href: "img/system/field08.png", src: "img/thumbnail/system_field08.png", srcset: "img/thumbnail/system_field08@2x.png 2x", alt: "町へ行く3" },
                ]
            }
        ],
        battle: [
            {
                heading: { src: "img/text/system_battle01.png", srcset: "img/text/system_battle01@2x.png 2x", alt: "3隊VS3隊のコマンドバトル" },
                texts: ["戦闘はシンプルなコマンドバトル！", "「攻撃スキル」と「防御スキル」を使い分けて敵を撃退しよう。", "敵を捕獲してみかたにすることもできるぞ！"],
                images: [
                    { href: "img/system/battle01.png", src: "img/thumbnail/system_battle01.png", srcset: "img/thumbnail/system_battle01@2x.png 2x", alt: "戦闘画面1" },
                    { href: "img/system/battle02.png", src: "img/thumbnail/system_battle02.png", srcset: "img/thumbnail/system_battle02@2x.png 2x", alt: "戦闘画面2" },
                    { href: "img/system/battle03.png", src: "img/thumbnail/system_battle03.png", srcset: "img/thumbnail/system_battle03@2x.png 2x", alt: "戦闘画面3" }
                ]
            },
            {
                heading: { src: "img/text/system_battle02.png", srcset: "img/text/system_battle02@2x.png 2x", alt: "さまざまなスキル" },
                texts: ["キャラクターごとに個性的なスキルが使える！"],
                images: [
                    { href: "img/system/battle04.png", src: "img/thumbnail/system_battle04.png", srcset: "img/thumbnail/system_battle04@2x.png 2x", alt: "戦闘画面1", sub: { src: "img/text/system_battle_sub01.png", srcset: "img/text/system_battle_sub01@2x.png 2x", alt: "ターンアンデッド！" } },
                    { href: "img/system/battle05.png", src: "img/thumbnail/system_battle05.png", srcset: "img/thumbnail/system_battle05@2x.png 2x", alt: "戦闘画面2", sub: { src: "img/text/system_battle_sub02.png", srcset: "img/text/system_battle_sub02@2x.png 2x", alt: "破壊光線！！" }  },
                    { href: "img/system/battle06.png", src: "img/thumbnail/system_battle06.png", srcset: "img/thumbnail/system_battle06@2x.png 2x", alt: "戦闘画面3", sub: { src: "img/text/system_battle_sub03.png", srcset: "img/text/system_battle_sub03@2x.png 2x", alt: "ゴッドレイ！！！" }  }
                ]
            },
            {
                heading: { src: "img/text/system_battle03.png", srcset: "img/text/system_battle03@2x.png 2x", alt: "死んだら最後の緊張感" },
                texts: ["キャラクターは戦闘で死んだら最後、物語に登場しなくなります。", "キャラクターの生死でストーリーが変化するかも！？"],
                images: [
                    { src: "img/thumbnail/gameover.png", srcset: "img/thumbnail/gameover@2x.png 2x", alt: "ゲームオーバー" },
                ]
            }
        ],
        drama: [
            {
                heading: { src: "img/text/system_drama01.png", srcset: "img/text/system_drama01@2x.png 2x", alt: "世界を彩るキャラクターたちのドラマ" },
                texts: null,
                images: [
                    { href: "img/system/drama01.png", src: "img/thumbnail/system_drama01.png", srcset: "img/thumbnail/system_drama01@2x.png 2x", alt: "ストーリーパート1", sub: { src: "img/text/system_drama_sub01.png", srcset: "img/text/system_drama_sub01@2x.png 2x", alt: "この領地、全部私にくれよ！" } },
                    { href: "img/system/drama02.png", src: "img/thumbnail/system_drama02.png", srcset: "img/thumbnail/system_drama02@2x.png 2x", alt: "ストーリーパート2" },
                    { href: "img/system/drama03.png", src: "img/thumbnail/system_drama03.png", srcset: "img/thumbnail/system_drama03@2x.png 2x", alt: "ストーリーパート3" },
                    { href: "img/system/drama04.png", src: "img/thumbnail/system_drama04.png", srcset: "img/thumbnail/system_drama04@2x.png 2x", alt: "ストーリーパート4", sub: { src: "img/text/system_drama_sub02.png", srcset: "img/text/system_drama_sub02@2x.png 2x", alt: "あっ！ こら！! ワーナーだーッ！！" } },
                    { href: "img/system/drama05.png", src: "img/thumbnail/system_drama05.png", srcset: "img/thumbnail/system_drama05@2x.png 2x", alt: "ストーリーパート5", sub: { src: "img/text/system_drama_sub03.png", srcset: "img/text/system_drama_sub03@2x.png 2x", alt: "入ったらぶっ殺すぞ！！" } },
                    { href: "img/system/drama06.png", src: "img/thumbnail/system_drama06.png", srcset: "img/thumbnail/system_drama06@2x.png 2x", alt: "ストーリーパート6" },
                    { href: "img/system/drama07.png", src: "img/thumbnail/system_drama07.png", srcset: "img/thumbnail/system_drama07@2x.png 2x", alt: "ストーリーパート7" },
                    { href: "img/system/drama08.png", src: "img/thumbnail/system_drama08.png", srcset: "img/thumbnail/system_drama08@2x.png 2x", alt: "ストーリーパート8", sub: { src: "img/text/system_drama_sub04.png", srcset: "img/text/system_drama_sub04@2x.png 2x", alt: "オイお前、私についてこいよ！" } },
                ]
            }
        ]
    });

    export default {
        data() {
            return {
                current: 0,
                items,
                contents
            };
        },

        methods: {
            updateGallery() {
                baguetteBox.destroy();
                baguetteBox.run(".gallery", {
                    captions: false,
                    async: true
                });
            },

            updateCurrentByLocationHash() {
                const hash = location.hash;
                const index = hash ? items.findIndex(item => `#${ item.id }` === hash) : 0;
                if(index !== -1) {
                    this.set({
                        current: index
                    });
                }
            }
        },

        oncreate() {
            // location で初期値の設定
            this.updateCurrentByLocationHash();

            // popstate イベントの監視
            window.addEventListener("popstate", () => this.updateCurrentByLocationHash());

            // モーダルの登録
            baguetteBox.run(".gallery", {
                captions: false,
                async: true
            });
            this.observe("current", this.updateGallery, { init: false, defer: true });
        },

        ondestroy() {
            baguetteBox.destroy();
        }
    };
</script>

