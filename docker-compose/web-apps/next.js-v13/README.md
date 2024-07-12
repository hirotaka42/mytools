## Next.JSプロジェクトの作成

### 最新バージョン
以下のコマンドで最新バージョンのNext.JSを使用したプロジェクトが作成される
```
npx create-next-app nextjs-project --typescript --eslint --use-npm
cd nextjs-project
```

### 特定のバージョンを指定して作成する

バージョンを指定するには、`npm i`にてプロジェクトで使用したいNext.JSのバージョンを明示する  
以下のコマンドは `13.5.6`のバージョン指定でプロジェクトを作成
```
npx create-next-app@13.5.6 nextjs-sample --typescript --eslint --use-npm
cd nextjs-sample
npm i next@13.5.6
```

## 設定内容と利点

1. `--typescript`  
- 内容: プロジェクトをTypeScriptで初期化します。
- 利点: 型安全性が向上し、開発中のエラーを早期に検出できます。特に大規模プロジェクトや長期的なメンテナンスが必要なプロジェクトに有用です。

2. `--eslint`
- 内容: プロジェクトにESLintを設定します。
- 利点: コード品質を向上させ、統一されたコーディングスタイルを維持できます。特にチーム開発では必須のツールです。

3. `--use-npm`
- 内容: npmを使用してパッケージを管理します（デフォルトはyarn）。
- 利点: npmを使用する場合、特にCI/CDパイプラインや特定の環境でnpmが標準の場合に便利です。既存のプロジェクトがnpmを使用している場合や、npmに慣れている場合に適しています。

## おすすめ理由

1. `TypeScriptとESLintの組み合わせ`: 型安全性とコード品質の両方を確保できるため、特に新しいプロジェクトやチーム開発において非常に有効です。
2. `npmの使用`: 既存の環境やCI/CDパイプラインがnpmを標準としている場合、このオプションを指定することで一貫性を保つことができます。

## 実行後の確認
このコマンドを実行すると、以下のようなディレクトリ構造と設定ファイルが生成されます。

- `tsconfig.json`: TypeScriptの設定ファイル
- `.eslintrc.json`: ESLintの設定ファイル
- `node_modules`: npmを使用してインストールされたパッケージ

また、以下のコマンドを実行してプロジェクトが正しく動作することを確認してください。
```
cd nextjs-sample
npm run dev
```

## Gitの`.gitignore`ファイルを簡単に作成する

### 方法1: GitHubの.gitignoreテンプレートを利用する  
[GitHubの.gitignoreテンプレート](https://github.com/github/gitignore)にアクセス  
プロジェクトに合ったテンプレートを選び、その内容をコピー  
プロジェクトのルートディレクトリに`.gitignore`ファイルを作成し、コピーした内容を貼り付ける  

### 方法2: コマンドラインツールを利用する  
`gitignore.io`(https://www.toptal.com/developers/gitignore/ )というサービスを利用して、簡単にカスタム`.gitignore`ファイルを生成できる  

コマンドラインで以下のコマンドを実行（例として、Node.jsとReactとNodeとASP.NETとそれぞれのOS環境のプロジェクト用の`.gitignore`を生成する場合）:
```
curl -L -s https://www.toptal.com/developers/gitignore/api/nextjs,react,macos,windows,linux,node,aspnetcore > .gitignore
```

このコマンドは`node`と`react`と`Node`と`ASP.NET`とそれぞれの`OS環境`に適した`.gitignore`ファイルを生成してくれます。