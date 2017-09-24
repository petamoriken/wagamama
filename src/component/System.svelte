<main>
    <div class="wrapper">
        <h1><img src="img/heading/system.png" alt="ゲームシステム"></h1>
        <nav>
            <menu type="toolbar">
                {{ #each items as item }}
                    <li>
                        <a href="#{{ item.id }}"><img src="{{ item.image.src }}" alt={{ item.image.alt }}></a>
                    </li>
                {{ /each }}
            </menu>
        </nav>
        <hr>
        <section>
            {{ #each contents[items[current].id] as content }}
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
            {{ /each }}
        </section>
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
        background: url("img/border.png");
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

    p {
        line-height: 1.7em;
    }
</style>

<script>
    export default {
        data() {
            return {
                current: 0,
                items: [
                    { id: "field", image: { src: "img/button/field.png", alt: "フィールド" } },
                    { id: "battle", image: { src: "img/button/battle.png", alt: "バトル" } },
                    { id: "drama", image: { src: "img/button/drama.png", alt: "ドラマシーン" } }
                ],
                contents: {
                    field: [
                        {
                            heading: { src: "img/text/system_field01.png", alt: "広大な世界を蹂躙せよ" },
                            texts: ["104の領地からなる広大な世界を侵略していくのがこのゲームの目的です。", "兵数をふやしたり、装備を買ったりしてユニットを鍛え、圧倒的な力で敵を侵略しよう。"],
                            images: [
                                { src: "img/thumbnail/system_field01.png", alt: "マップ画面1" },
                                { src: "img/thumbnail/system_field02.png", alt: "マップ画面2" },
                                { src: "img/thumbnail/system_field03.png", alt: "マップ画面3" }
                            ]
                        }

                    ]
                }
            };
        }
    };
</script>

