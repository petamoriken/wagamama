# wagamama
わがままアリスと百日戦争のプロモーションサイト  
http://koromosoft.com/alice1

## ビルド方法

### 初回のみ
1. [Node.js 最新版](https://nodejs.org/ja/) をインストールします
1. パッケージマネージャである [yarn](https://yarnpkg.com/en/docs/install) をインストールします

### 毎回
1. ターミナル（コマンドプロンプト）でこの `wagamama` の中のディレクトリ（フォルダ）で `yarn` を実行し、依存するパッケージをインストールまたはアップデートします
1. `yarn run build` を実行すると `build/debug` フォルダにデバッグ用のファイルを出力します. また `yarn run release` を実行すると `build/release` フォルダにリリース用のファイルを出力します. デプロイ時にはこの `build/release` の中身をサーバーに置いてください