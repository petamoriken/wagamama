<main>
    <div class="wrapper">
        <h1><img src="img/heading/system.png" alt="ゲームシステム"></h1>
        <nav>
            <menu type="toolbar">
                {{ #each items as item, i }}
                    <li>
                        <a on:tap="set({ current: i })" href="#{{ item.id }}"><img src="{{ item.image.src }}" alt={{ item.image.alt }}></a>
                    </li>
                {{ /each }}
            </menu>
        </nav>
        <hr>
            {{ #each contents[items[current].id] as content }}
                <section>
                    <h2><img src="{{ content.heading.src }}" alt="{{ content.heading.alt }}"></h2>
                    <p>
                        {{ #each content.texts as text }}
                            {{ text }}<br>
                        {{ /each }}
                    </p>
                    <div class="thumbnail">
                        {{ #each content.images as image }}
                            <img src="{{ image.src }}" alt="{{ image.alt }}">
                        {{ /each }}
                    </div>
                </section>
            {{ /each }}
    </div>
</main>

<style>
    .wrapper {
        width: 1100px;
        margin: 0 auto;
        padding: 60px 0 0;
        color: white;
    }

    h1 {
        position: absolute;
        transform: translateY(15px);
        margin: 0 0 0 20px;
    }

    hr {
        width: 100%;
        height: 27px;
        position: absolute;
        left: 0;
        margin: 0;
        border: 0;
        background: url("img/accessory/border.png");
    }

    menu {
        width: 330px;
        display: flex;
        list-style: none;
        margin: 0 auto;
        padding: 0;
        justify-content: space-between;
    }

    section {
        margin: 50px 0;
        text-align: center;
    }

    h2{
        margin: 0;
    }

    p {
        line-height: 1.7em;
    }

    .thumbnail img {
        margin: 0 5px;
    }
</style>

<script>
    const items = Object.freeze([
        { id: "field", image: { src: "img/button/field.png", alt: "フィールド" } },
        { id: "battle", image: { src: "img/button/battle.png", alt: "バトル" } },
        { id: "drama", image: { src: "img/button/drama.png", alt: "ドラマシーン" } }
    ]);

    const contents = Object.freeze({
        field: [
            {
                heading: { src: "img/text/system_field01.png", alt: "広大な世界を蹂躙せよ" },
                texts: ["104の領地からなる広大な世界を侵略していくのがこのゲームの目的です。", "兵数をふやしたり、装備を買ったりしてユニットを鍛え、圧倒的な力で敵を侵略しよう。"],
                images: [
                    { src: "img/thumbnail/system_field01.png", alt: "マップ画面1" },
                    { src: "img/thumbnail/system_field02.png", alt: "マップ画面2" },
                    { src: "img/thumbnail/system_field03.png", alt: "マップ画面3" }
                ]
            },
            {
                heading: { src: "img/text/system_field02.png", alt: "軍団を強化しよう" },
                texts: ["敵の領地を新訳するために自分の軍団を強くする必要があります。", "経験値をためてレベルを上げたり、兵士の数を増やしたり、", "装備を変えたりとユニットをカスタマイズして軍団を強くしよう。"],
                images: [
                    { src: "img/thumbnail/system_field04.png", alt: "軍団拡張画面1" },
                    { src: "img/thumbnail/system_field05.png", alt: "軍団拡張画面2" },
                ]
            },
            {
                heading: { src: "img/text/system_field03.png", alt: "軍団を強化しよう" },
                texts: ["メニュー画面から町へ繰り出すことができます。", "町では装備や戦闘の役に立つカードを購入できたり、", "キャラクターたちのショートエピソードを楽しむことが出来ます。"],
                images: [
                    { src: "img/thumbnail/system_field06.png", alt: "町へ行く" },
                    { src: "img/thumbnail/system_field07.png", alt: "" }, // TODO
                    { src: "img/thumbnail/system_field08.png", alt: "" }, // TODO
                ]
            }
        ],
        battle: [
            {
                heading: { src: "img/text/system_battle01.png", alt: "3隊VS3隊のコマンドバトル" },
                texts: ["戦闘はシンプルなコマンドバトル！", "「攻撃スキル」と「防御スキル」を使い分けて敵を撃退しよう。", "敵を捕獲してみかたにすることもできるぞ！"],
                images: [
                    { src: "", alt: "戦闘画面1" }, // TODO
                    { src: "", alt: "戦闘画面2" }, // TODO
                    { src: "", alt: "戦闘画面3" } // TODO
                ]
            },
            {
                heading: { src: "img/text/system_battle02.png", alt: "さまざまなスキル" },
                texts: ["キャラクターごとに個性的なスキルが使える！"],
                images: [
                    { src: "", alt: "戦闘画面1" }, // TODO
                    { src: "", alt: "戦闘画面2" }, // TODO
                    { src: "", alt: "戦闘画面3" } // TODO
                ]
            },
            {
                heading: { src: "img/text/system_battle03.png", alt: "死んだら最後の緊張感" },
                texts: ["キャラクターは戦闘で死んだら最後、物語に登場しなくなります。", "キャラクターの静止でストーリーが変化するかも！？"],
                images: [
                    { src: "img/thumbnail/gameover.png", alt: "ゲームオーバー" }, // TODO
                ]
            }
        ],
    });

    export default {
        data() {
            return {
                current: 0,
                items,
                contents
            };
        },

        oncreate() {
            // location.href で初期値の設定
            const index = items.findIndex(item => `#${ item.id }` === location.hash);
            if(index !== -1) {
                this.set({
                    current: index
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

