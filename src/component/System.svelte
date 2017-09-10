<main>
    <div class="wrapper">
        <h1><img src="img/heading/system.png" alt="ゲームシステム"></h1>
        <nav>
            <menu type="toolbar">
                {{ #each items as item }}
                    <li>
                        <a href="#{{ item.id }}"><img src="img/button/{{ item.id }}.png" alt={{ item.alt }}></a>
                    </li>
                {{ /each }}
            </menu>
        </nav>
        <hr>
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
</style>

<script>
    export default {
        data() {
            return {
                items: [
                    { id: "field", alt: "フィールド" },
                    { id: "battle", alt: "バトル" },
                    { id: "drama", alt: "ドラマシーン" }
                ]
            };
        }
    };
</script>

