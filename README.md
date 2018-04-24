# wagamama
わがままアリスと百日戦争のプロモーションサイト  
http://coromosoft.sub.jp

## ビルド方法
1. [Node.js 最新版](https://nodejs.org/ja/), [yarn](https://yarnpkg.com/en/docs/install) をインストールします
1. ターミナル（コマンドプロンプト）でこの `wagamama` の中のディレクトリ（フォルダ）で `yarn install` を実行し、依存するパッケージをインストールします
1. `yarn run build` を実行すると `build/debug` フォルダにデバッグ用のファイルを出力します. また `yarn run release` を実行すると `build/release` フォルダにリリース用のファイルを出力します. デプロイ時にはこの `build/release` の中身をサーバーに置いてください