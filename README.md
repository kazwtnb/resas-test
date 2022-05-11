# RESAS API TEST

RESAS APIを用いて、
都道府県ごとの人口をグラフ表示するサンプル

https://snazzy-elf-ead648.netlify.app/

どうしても触ってみたくなりNuxt 3 RC版を使用

# 使用技術

- NuxtJS/3.0.0-rc.2
- vitest/0.10.5
- highcharts
- netlify
- Node.js 16.15.0（nvm管理）

## ローカル実行のSetup

```
nvm install
npm install
```

プロジェクト直下に.envファイルを作成し、
RESAS_API_KEY={有効なAPI_KEY}を指定する

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Run & Watch Test
```bash
npm run test
```

## Test & SSR Build on CD

Build the application for production:

```bash
npm run cd
```

## 全体のディレクトリ構成イメージ

/pages : ページコンポーネント

↑↓

/components : 通常コンポーネント Atomicデザインライクにディレクトリ分類

↑↓

/composables : ロジック層 ReactHooksライクにUseHogeにロジックを分離

↑↓

/repository : リポジトリ層 APIとの通信部分を吸収。RC版の残存バグでテストで/serverが実行できないため、テストではこの層でモック

↑↓

/server : BFF層 外部API通信をNuxtのserver機能で実装。バックエンドから通信を行うためAPIキーを隠蔽できる