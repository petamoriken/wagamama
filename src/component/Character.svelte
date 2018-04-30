<main>
    <div class="wrapper">
        <h1><img src="img/heading/character.png" srcset="img/heading/character@2x.png 2x" alt="キャラクター"></h1>
        <hr>
        <nav>
            <button on:tap="set({ menuGroupIndex: menuGroupIndex - 1 })"><img src="img/accessory/arrow_left.png" srcset="img/accessory/arrow_left@2x.png 2x" alt="メニューを左へ移動"></button>
            <button on:tap="set({ menuGroupIndex: menuGroupIndex + 1 })"><img src="img/accessory/arrow_right.png" srcset="img/accessory/arrow_right@2x.png 2x" alt="メニューを右へ移動"></button>
            <menu ref:menu>
                <div on:swipe>
                    { #each menuGroups as group, i }
                        <div hidden="{ menuGroupIndex !== i }">
                            { #each group as character, j }
                                <li role="menuitemradio" aria-checked="{ characterIndex === i * menuGroups[0].length + j ? 'true' : 'false' }">
                                    <a href="#{ character.id }" aria-current="{ characterIndex === i * menuGroups[0].length + j ? 'page' : '' }">
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
                <h2><img src="img/character/name/{ characters[characterIndex].id }.png" srcset="img/character/name/{ characters[characterIndex].id }@2x.png 2x" alt="{ characters[characterIndex].name.ja }"></h2>
                <hr>
                <div class="subtext">
                    <p>cv.{ characters[characterIndex].cv }</p>
                    <p>{ characters[characterIndex].name.en }</p>
                </div>
                <div class="description">
                    <p>{ characters[characterIndex].description }</p>
                </div>
            </figcaption>
            <img src="img/character/{ characters[characterIndex].id }.png" srcset="img/character/{ characters[characterIndex].id }@2x.png 2x" alt="{ characters[characterIndex].name.ja } 立ち絵">
        </figure>
    </div>
    <div class="cache">
        { #each characters as character }
            { character.name.ja }{ character.name.en }{ character.cv }{ character.description }
        { /each }
    </div>
</main>
<svelte:window on:hashchange="updateCharacterIndexByLocationHash()" on:resize="execRefreshMenuGroupMaxItemSizeByResize()"></svelte:window>

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
        --group-index: 0;
        --group-size: 3;
        --last-rest-item-size: 7;
        width: calc(100% - 160px);
        height: 80px;
        overflow: hidden;
        padding: 0;
        margin: 0 auto;
        font-size: 0;
    }

    menu > div {
        height: 100%;
        width: calc(100% * var(--group-size));
        transform: translateX(calc(-100% / var(--group-size) * var(--group-index)));
    }

    menu > div > div {
        height: 100%;
        width: calc(100% / var(--group-size));
        display: flex;
        float: left;
    }

    menu > div > div:last-child::after {
        content: "";
        flex: var(--last-rest-item-size) 1 calc(81px * var(--last-rest-item-size));
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

    li img:hover {
        opacity: 1;
    }

    li[aria-checked="true"] img {
        opacity: 1;
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
    const resizeThrottle = 50;
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
                menuGroupMaxItemSize: 11,
                characterIndex: 0,
                characters,
            };
        },

        computed: {
            menuGroupIndex: ({ characterIndex, menuGroupMaxItemSize }) => characterIndex / menuGroupMaxItemSize | 0,
            menuGroups: ({ characters, menuGroupMaxItemSize }) => {
                const ret = [];
                for (let i = 0, l = Math.ceil(characters.length / menuGroupMaxItemSize); i < l; ++i) {
                    ret.push(characters.slice(i * menuGroupMaxItemSize, (i + 1) * menuGroupMaxItemSize));
                }
                return ret;
            },
        },

        methods: {
            refreshMenuGroupMaxItemSize() {
                const { menuGroupMaxItemSize } = this.get();
                const { menu } = this.refs;
                const width = menu.offsetWidth;

                const changedMenuGroupMaxItemSize = width / imageWidth | 0;
                if (menuGroupMaxItemSize === changedMenuGroupMaxItemSize) { return; }

                this.set({ menuGroupMaxItemSize: changedMenuGroupMaxItemSize });
            },

            execRefreshMenuGroupMaxItemSizeByResize() {
                // throttle
                const timestamp = Date.now();
                if (timestamp - this._oldResizeTimestamp < resizeThrottle) { return; }

                this.refreshMenuGroupMaxItemSize();

                this._oldResizeTimestamp = timestamp;
            },

            updateCharacterIndexByLocationHash() {
                const { characters } = this.get();
                const hash = location.hash;
                const index = hash ? characters.findIndex(character => `#${ character.id }` === hash) : 0;
                if (index === -1) { return; }

                this.set({ characterIndex: index });
            },
        },

        onstate({ changed, current }) {
            if (changed.menuGroups || changed.menuGroupIndex) {
                const { menuGroups, menuGroupIndex } = current;
                const groupSize = menuGroups.length;
                const { menu } = this.refs;

                let currentmenuGroupIndex = menuGroupIndex % groupSize;
                if (currentmenuGroupIndex < 0) {
                    currentmenuGroupIndex += groupSize;
                }

                // menu > div の位置を変える
                menu.style.setProperty("--group-index", currentmenuGroupIndex);
            }

            // menu がリサイズされて　menuGroupMaxItemSize が変更されるのを監視する
            if(changed.menuGroups || changed.menuGroupMaxItemSize) {
                const { menuGroups, menuGroupMaxItemSize } = current;
                const groupSize = menuGroups.length;
                const { menu } = this.refs;

                menu.style.setProperty("--group-size", groupSize);

                // 最後の行を左寄せにする
                const rest = menuGroupMaxItemSize - menuGroups[menuGroups.length - 1].length;
                menu.style.setProperty("--last-rest-item-size", rest);
            }
        },

        oncreate() {
            // menu の表示領域を確認して、menuGroupMaxItemSize を変更する
            this.refreshMenuGroupMaxItemSize();

            // location.hash で characterIndex の設定
            this.updateCharacterIndexByLocationHash();
        },

        events: {
            swipe(node, callback) {
                if ("ontouchstart" in window) {
                    const ontouchstart = e => {
                        const x = e.touches[0].clientX;

                        node.addEventListener("touchend", e => {
                            const { menuGroupIndex } = this.get();
                            const dx = e.changedTouches[0].clientX - x;
                            if (dx < -swipeThreshold) {
                                this.set({ menuGroupIndex: menuGroupIndex + 1 });
                            } else if (dx > swipeThreshold) {
                                this.set({ menuGroupIndex: menuGroupIndex - 1 });
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