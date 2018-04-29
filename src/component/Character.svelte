<main>
    <style ref:style></style>
    <div class="wrapper">
        <h1><img src="img/heading/character.png" srcset="img/heading/character@2x.png 2x" alt="キャラクター"></h1>
        <hr>
        <nav>
            <button on:tap="set({ displayedListRow: displayedListRow - 1 })"><img src="img/accessory/arrow_left.png" srcset="img/accessory/arrow_left@2x.png 2x" alt="左へ移動"></button>
            <button on:tap="set({ displayedListRow: displayedListRow + 1 })"><img src="img/accessory/arrow_right.png" srcset="img/accessory/arrow_right@2x.png 2x" alt="右へ移動"></button>
            <menu ref:menu role="toolbar">
                <div ref:outer on:swipe>
                    { #each characterRowItems as row, i }
                        <div hidden="{ displayedListRow !== i }">
                            { #each row as character, j }
                                <li role="menuitemradio" aria-current="{ current === i * characterRowItems[0].length + j ? 'page' : '' }">
                                    <a href="#{ character.id }">
                                        <img width="80" height="80" src="img/character/chip/{ character.id }.png" srcset="img/character/chip/{ character.id }@2x.png 2x" alt="{ character.name.ja } キャラチップ">
                                    </a>
                                </li>
                            { /each }
                        </div>
                    { /each }
                </div>
            </menu>
        </nav>
        <figure>
            <figcaption>
                <h2><img src="img/character/name/{ characters[current].id }.png" srcset="img/character/name/{ characters[current].id }@2x.png 2x" alt="{ characters[current].name.ja }"></h2>
                <hr>
                <div class="subtext">
                    <p>cv.{ characters[current].cv }</p>
                    <p>{ characters[current].name.en }</p>
                </div>
                <div class="description">
                    <p>{ characters[current].description }</p>
                </div>
            </figcaption>
            <img src="img/character/{ characters[current].id }.png" srcset="img/character/{ characters[current].id }@2x.png 2x" alt="{ characters[current].name.ja } 立ち絵">
        </figure>
    </div>
    <div class="cache">
        { #each characters as character }
            { character.name.ja }{ character.name.en }{ character.cv }{ character.description }
        { /each }
    </div>
</main>
<svelte:window on:hashchange="updateCurrentByLocationHash()" on:resize="execRefrechDisplayedListItemByResize()"></svelte:window>

<style>
    main {
        width: 100%;
        color: #eee;
    }

    main .cache {
        display: none;
    }

    .wrapper {
        width: 1100px;
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
        background: url("img/background/border.png");
    }

    @media screen and (min-resolution: 2dppx) {
        .wrapper > hr {
            background: url("img/background/border@2x.png") 0/auto 100%;
        }
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
        width: calc(100% - 160px);
        height: 80px;
        overflow: hidden;
        padding: 0;
        margin: 0 auto;
        font-size: 0;
    }

    menu > div {
        height: 100%;
    }

    menu > div > div {
        height: 100%;
        display: flex;
        float: left;
    }

    li {
        margin: 0;
        padding: 0;
        flex-grow: 1;
        text-align: center;
    }

    li img {
        opacity: 0.6;
        vertical-align: top;
    }

    li[aria-current="page"] img {
        opacity: 1;
    }

    @media screen and (min-width: 740px) {
        li:not([aria-selected="page"]) img:hover {
            opacity: 1;
        }
    }

    figure {
        position: relative;
        min-height: 650px;
        top: -50px;
        margin: 0 0 -50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    figcaption {
        width: 350px;
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 180px 0 0;
        transform: translateX(100px);
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
        height: 244px;
        padding: 40px 40px 25px;
        color: #111;
        box-sizing: border-box;
        background: url("img/background/comment.png");
    }

    @media screen and (min-resolution: 2dppx) {
        .description {
            background: url("img/background/comment@2x.png") 0/cover;
        }
    }

    .description > p {
        line-height: 1.5em;
    }

    @media screen and (max-width: 740px) {
        .wrapper {
            width: 100%;
        }

        menu {
            width: calc(100% - 100px);
        }

        figure {
            display: block;
            top: auto;
            margin: 20px 0 0;
            min-height: 550px;
        }

        figcaption {
            max-width: 80%;
            margin: 0 auto;
            transform: none;
        }

        .description {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
        }

        figure > img {
            max-width: 100%;
            margin-bottom: 150px;
        }
    }
</style>

<script>
    const swipeThreshold = 30;
    const imageWidth = 81;
    const characters = Object.freeze([
        { id: "alice", name: { ja: "アリス", en: "Alice" }, cv: "新藤若菜", description: "主人公の魔女。わがままでいいかげんな性格で、領主の仕事を放り出していつも町でフラフラしている。しかし、ある事件がきっかけで世界を巻き込む戦争に身を投じる事になる。" },
        { id: "chishier", name: { ja: "チシャ", en: "Chishier" }, cv: "桃色そにあ", description: "アリスの部下。主に召使のような仕事をしているが、戦争が始まってからは内政も担当している、実は有能な猫。アリスの怒りを買うことが多く、いつも彼女に泣かされている。" },
        { id: "kuro", name: { ja: "クロ", en: "Kuro" }, cv: "titi", description: "アリスの部下。寡黙で冷静な黒猫の剣士。戦闘のプロで、様々な場面でアリスをサポートしてくれる、頼れる部下。" },
        { id: "meisie", name: { ja: "メイジー", en: "Meisie" }, cv: "木成かずえ", description: "アリスの妹弟子の魔女。小さい頃からアリスと仲が悪く、よく喧嘩をしていた。ある時、あまりに仕事をしないアリスに愛想を尽かして反乱を起こす。" },
        { id: "triaina", name: { ja: "トリアイナ", en: "Triaina" }, cv: "新藤若菜", description: "北西の氷に覆われた領地を治める領主。氷の魔法を操る魔女で、性格もドライでクール。オリヴィア、ヘレンとは仲がよく、３人でいつもお茶会をしている。" },
        { id: "orivia", name: { ja: "オリヴィア", en: "Orivia" }, cv: "調子ぶっこき丸", description: "西の領地を収める領主。回復魔法が得意な魔女で、気が弱くおっとりした性格。少し天然なところがあり、ヘレンやトリアイナを呆れされることもしばしば。" },
        { id: "helen", name: { ja: "ヘレン", en: "Helen" }, cv: "Nagano,M.", description: "トリアイナの部下で、オリヴィアの友人。実は人魚で、水中では下半身が魚の姿になる。素直な性格で、オリヴィアの天然な行動にツッコんだり、トリアイナのドライな態度に反発したりすることもある。" },
        { id: "dood", name: { ja: "ドード", en: "Dood" }, cv: "titi", description: "オリヴィアの部下のナイフ使い。最近オリヴィアの部下になった。イヒヒッ！ という気味の悪い含み笑いをする。" },
        { id: "karton", name: { ja: "カートン", en: "Karton" }, cv: "タピオカ", description: "オリヴィアの部下で、黄金の鎧を身にまとった戦士。昔受けた傷が元で声を失った。オリヴィアとは筆談でなんとかコミュニケーションを取っている。" },
        { id: "marger", name: { ja: "マルゲル", en: "Marger" }, cv: "titi", description: "吹雪で遭難していたところをトリアイナたちに助けられた旅の吟遊詩人。助けてもらった恩を返すため、トリアイナたちを助けることになる。" },
        { id: "charlotte", name: { ja: "シャルロッテ", en: "Charlotte" }, cv: "苗好りか", description: "東の領地の領主。高名な魔女の流派、ロレーヌ一派の頭首でもある魔女。物腰の柔らかい上品な出で立ちだが、一派の看板を背負い、日々プレッシャーと戦っているようだ。" },
        { id: "ema", name: { ja: "エマ", en: "Ema" }, cv: "霜月", description: "シャルロッテの部下の少女。エミルの姉。子供らしい元気な性格で、エミルやカスミに手を焼かせている。心の奥では、シャルロッテの役に立ちたいと思っている。" },
        { id: "emil", name: { ja: "エミル", en: "Emil" }, cv: "武田遥", description: "シャルロッテの部下の少年。エマの弟。子供ながら凄腕の薬師で、その才能はアリスも驚くほど。姉のエマにいつも振り回されている。" },
        { id: "kasumi", name: { ja: "カスミ", en: "Kasumi" }, cv: "伊東和奏", description: "シャルロッテの部下の少女。女子高生の格好しているが、学校に通っているわけではない。かなり頭の切れる軍師だが、普段はやる気のないだるそうな態度をしている。" },
        { id: "pumpking", name: { ja: "パンプキング", en: "Pumpking" }, cv: "ピエール", description: "アカリによって生み出されたかぼちゃの魔法生物が化物に変貌した姿。アカリから領地を奪い、自分のものにしてしまう。" },
        { id: "akari", name: { ja: "アカリ", en: "Akari" }, cv: "新藤若菜", description: "北東の領地を治める領主。人形づくりと読書が趣味の物静かな魔女。パンプキングによって地下に幽閉されるが、むしろゆっくり読書に励むことができて満足げである。" },
        { id: "pumpkingfour", name: { ja: "パンプキング・フォー", en: "Pumpkingfour" }, cv: "狐火きょう火", description: "パンプキングの部下のかぼちゃたち。パンプキングの周りで騒がしくしている。得意技は自爆。" },
        { id: "lily", name: { ja: "リリィ", en: "Lily" }, cv: "まつもん", description: "北の領地を治める領主、ゾンビたちを従えて、毒を使った攻撃を得意とする厄介な魔女。かなりの高齢で、弟子のミグに支えられながら幸せな生活を送っている。" },
        { id: "mig", name: { ja: "ミグ", en: "Mig" }, cv: "霜月", description: "リリィの弟子で、まだ幼い魔女。リリィをおばあちゃんと呼び、慕っている。いろいろなものに興味がある年頃で、戦争を仕掛けてきたアリスにも興味津々な様子。" },
        { id: "messerschmitt", name: { ja: "メッサーシュミット", en: "Messerschmitt" }, cv: "ケイ", description: "ベガの部下の、子供のドラゴン。ベガとは小さい頃からともに育ってきた仲であり、部下に成った今もそのくせが抜けておらず、時々ベガに態度を注意される。" },
        { id: "vega", name: { ja: "ベガ", en: "Vega" }, cv: "けふ輔。", description: "東の山にあるドラゴンの国を治める魔女。ドラゴンと魔女のハーフという珍しい魔女。屈強なドラゴンたちを従えるにふさわしい威厳を持っている。" },
        { id: "raisa", name: { ja: "ライザ", en: "Raisa" }, cv: "雪村望", description: "ヴェロニカの弟子だったが、双子の妹のニアとともに裏切り、ヴェロニカを領地から追い出す。傲慢で乱暴な性格で、電撃系の魔法を操る。追い出したヴェロニカ率いる軍勢と大戦争を繰り広げることになる。" },
        { id: "nia", name: { ja: "ニア", en: "Nia" }, cv: "雪村望", description: "双子の姉ライザとともに師匠であるヴェロニカを裏切る。かなり天然な性格で、かなり残酷な一面も見せる。魔女としての実力はライザ並にあるが、軍団の指揮能力はイマイチなようだ。" },
        { id: "veronica", name: { ja: "ヴェロニカ", en: "Veronica" }, cv: "中月りえ", description: "ライザとニアの師匠で、アリスの姉弟子。ライザとニアの裏切りにあり、領地を追われる。その後、部下のエリ、シードルとともにライザ軍と大戦争を繰り広げることになる。" },
        { id: "eri", name: { ja: "エリ", en: "Eri" }, cv: "霜月", description: "ヴェロニカの部下の少女。腹が立つと部下のシードルを蹴りまくるドSの女王様な一面を持つ。人間だが魔法が使える不思議な少女。彼女には、外には言えない秘密があるようだが……？" },
        { id: "seedle", name: { ja: "シードル", en: "Seedle" }, cv: "ばすにゃん", description: "エリの部下で硬い殻に覆われたシードラウトという種族の植物人。エリによくいびられているが、本人は幸せそう。" },
    ]);

    export default {
        data() {
            return {
                displayedListRow: 0,
                displayedMaxListItem: 6,
                current: 0,
                characters,
            };
        },

        computed: {
            displayedListRow: ({ current, displayedMaxListItem }) => current / displayedMaxListItem | 0,
            characterRowItems: ({ characters, displayedMaxListItem }) => {
                const ret = [];
                for (let i = 0, l = Math.ceil(characters.length / displayedMaxListItem); i < l; ++i) {
                    ret.push(characters.slice(i * displayedMaxListItem, (i + 1) * displayedMaxListItem));
                }
                return ret;
            },
        },

        methods: {
            refreshDisplayedListItem() {
                const { displayedMaxListItem, characterRowItems } = this.get();
                const { menu } = this.refs;
                const width = menu.offsetWidth;

                const changedDisplayedMaxListItem = width / imageWidth | 0;
                if (displayedMaxListItem === changedDisplayedMaxListItem) { return; }

                this.set({ displayedMaxListItem: changedDisplayedMaxListItem });
            },

            execRefrechDisplayedListItemByResize() {
                const oldWidth = this._oldWidth;
                const { menu, outer } = this.refs;
                const currentWidth = menu.offsetWidth;
                if (currentWidth === oldWidth) { return; }

                this.refreshDisplayedListItem();
                const { displayedListRow } = this.get();
                outer.style.transform = `translateX(${ - currentWidth * displayedListRow }px)`;

                this._oldWidth = currentWidth;
            },

            updateCurrentByLocationHash() {
                const { characters } = this.get();
                const hash = location.hash;
                const index = hash ? characters.findIndex(character => `#${ character.id }` === hash) : 0;
                if (index === -1) { return; }

                this.set({ current: index });
            },
        },

        onstate({ changed, current }) {
            // arrow がクリックされたり、swipe されて displayedListRow が変更されるのを監視する
            if (this.isCreated && changed.displayedListRow) {
                const { characterRowItems, displayedListRow } = current;
                const length = characterRowItems.length;
                const { menu, outer } = this.refs;

                let currentDisplayedListRow = displayedListRow % length;
                if (currentDisplayedListRow < 0) {
                    currentDisplayedListRow += length;
                }

                // menu > div の位置を変える
                outer.style.transform = `translateX(${ - menu.offsetWidth * currentDisplayedListRow }px)`;
            }

            // menu がリサイズされて　displayedMaxListItem が変更されるのを監視する
            if(changed.displayedMaxListItem) {
                const { characterRowItems, displayedMaxListItem } = current;
                const rowNum = characterRowItems.length;
                const { outer } = this.refs;

                // menu > div の width を合わせる
                outer.style.width = `${ 100 * rowNum }%`;

                // menu > div > div の width を合わせる
                for (const div of outer.childNodes) {
                    div.style.width = `calc(100% / ${ rowNum })`;
                }

                // 最後の行を左寄せにする
                if (displayedMaxListItem !== 1) {
                    const rest = displayedMaxListItem - characterRowItems[characterRowItems.length - 1].length;
                    this.refs.style.textContent = `main menu > div > div:last-child::after { content: ""; flex: ${ rest } 1 ${ imageWidth * rest }px; }`;
                } else {
                    this.refs.style.textContent = "";
                }
            }
        },

        oncreate() {
            // menu の表示領域を確認して、displayedMaxListItem を変更したり style を変える
            this.refreshDisplayedListItem();

            // location.hash で初期値の設定
            this.updateCurrentByLocationHash();

            // execRefrechDisplayedListItemByResize で使うプロパティの設定
            this._oldWidth = this.refs.menu.offsetWidth;

            this.isCreated = true;
        },

        events: {
            swipe(node, callback) {
                if ("ontouchstart" in window) {
                    const ontouchstart = e => {
                        const x = e.touches[0].clientX;

                        node.addEventListener("touchend", e => {
                            const { displayedListRow } = this.get();
                            const dx = e.changedTouches[0].clientX - x;
                            if (dx < -swipeThreshold) {
                                this.set({ displayedListRow: displayedListRow + 1 });
                            } else if (dx > swipeThreshold) {
                                this.set({ displayedListRow: displayedListRow - 1 });
                            }
                        }, { once: true });
                    }
                    node.addEventListener("touchstart", ontouchstart);

                    return {
                        destroy() {
                            node.removeEventListener("touchstart", ontouchstart);
                        }
                    };
                }
            },

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