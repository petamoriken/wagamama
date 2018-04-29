<footer>
    <dl>
        <dt>ジャンル</dt>
        <dd>地域制圧型戦略シミュレーション</dd>
        <dt>プラットフォーム</dt>
        <dd>Windows / Mac</dd>
        <dt>ディレクター</dt>
        <dd>Chicchi</dd>
        <dt>最低動作スペック</dt>
        <dd>
            <dl>
                <dt>CPU</dt>
                <dd>Core i シリーズ</dd>
                <dt>RAM</dt>
                <dd>4GB</dd>
                <dt>モニター</dt>
                <dd>1280×720</dd>
            </dl>
        </dd>
    </dl>
    <p><small>&copy; 2017 PROJECT WITCH All Rights Reserved.</small></p>
</footer>

<style>
    footer {
        width: 100%;
        background: #111;
    }

    footer > dl {
        width: 1100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0 auto;
    }

    footer > dl > dt {
        height: 2em;
        display: flex;
        flex-basis: 14%;
        box-sizing: border-box;
        margin: 6px 0;
        border: 1px solid #ccc;
        align-items: center;
        justify-content: center;
        color: #ccc;
        font-size: 0.8em;
    }

    footer > dl > dd {
        display: flex;
        align-items: center;
        flex-basis: 23%;
        margin: 6px 0;
        color: #eee;
    }

    footer > dl > dd:nth-of-type(2n) {
        flex-basis: 44%;
    }

    dd > dl {
        margin: 0;
    }

    dd > dl > dt::after {
        content: ":"
    }

    dd > dl > dt {
        display: inline;
    }

    dd > dl > dd {
        margin: 0 0.4em 0 0;
        display: inline;
    }

    p {
        text-align: center;
        color: #ccc;
    }

    @media screen and (max-width: 740px) {
        footer > dl {
            width: 100%;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        footer > dl > dt {
            width: 165px;
            flex-basis: auto;
        }

        footer > dl > dd {
            margin-top: 0;
            flex-basis: auto !important;
        }

        dd > dl {
            line-height: 1.5em;
        }

        dd > dl > dd::after {
            content: "\000A";
            white-space: pre-wrap;
        }
    }
</style>