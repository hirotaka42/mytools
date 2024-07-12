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


## Prettierをインストールする

```
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

次に、プロジェクトのルートディレクトリに.prettierrc.jsonファイルを作成し、以下のPrettier設定を記述してください。

### Prettierの設定ファイル

`.prettierrc`ファイルの内容
```
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "crlf"
}

```

### .prettierrc ファイルの内容

このファイルは、コードフォーマッターツールの Prettier の設定を定義しています。以下は各設定項目の説明です:

1. **semi**: `true` に設定されているため、文末にセミコロン(`;`)を挿入します。
2. **singleQuote**: `true` に設定されているため、文字列はシングルクォート(`'`)で囲まれます。
3. **printWidth**: 行の最大長を `80` 文字に設定しています。
4. **tabWidth**: インデントの幅を `2` 空白に設定しています。
5. **trailingComma**: `"es5"` に設定されているため、ES5 対応の末尾カンマ(`,`)を使用します。
6. **bracketSpacing**: `true` に設定されているため、オブジェクトリテラルの中括弧の前後に空白を入れます。
7. **arrowParens**: `"always"` に設定されているため、Arrow Function の引数が1つの場合でも括弧を使用します。
8. **endOfLine**: `"crlf"` に設定されているため、行末の改行コードを Windows 形式の CRLF に設定しています。

### .prettierrc ファイル内容の詳細

#### `semi`
- 値: `true` または `false`
- 説明: 文末にセミコロンを付けるかどうかを指定します。`true`の場合はセミコロンを付けます。

#### `singleQuote`
- 値: `true` または `false`
- 説明: 文字列の囲み文字を単一引用符(`'`)にするか、二重引用符(`"`)にするかを指定します。`true`の場合は単一引用符を使用します。

#### `printWidth`
- 値: 数値
- 説明: 1行の最大文字数を指定します。この値を超えると自動的に改行されます。

#### `tabWidth`
- 値: 数値
- 説明: インデントに使用するスペースの数を指定します。

#### `trailingComma`
- 値: `"es5"`, `"all"`, または `"none"`
- 説明: 末尾のカンマの扱いを指定します。
  - `"es5"`: ES5 の仕様に従って、オブジェクトやArrayの最後の要素にはカンマを付けません。
  - `"all"`: 常に末尾にカンマを付けます。
  - `"none"`: 末尾にカンマを付けません。

#### `bracketSpacing`
- 値: `true` または `false`
- 説明: オブジェクトリテラルの中括弧の前後に空白を入れるかどうかを指定します。`true`の場合は空白を入れます。

#### `arrowParens`
- 値: `"always"`, `"avoid"`, または `"as-needed"`
- 説明: Arrow Functionの引数の括弧の扱いを指定します。
  - `"always"`: 引数が1つの場合でも括弧を使用します。
  - `"avoid"`: 引数が1つの場合は括弧を使用しません。
  - `"as-needed"`: 引数が複数の場合のみ括弧を使用します。

#### `endOfLine`
- 値: `"lf"`, `"crlf"`, `"cr"`, または `"auto"`
- 説明: 行末の改行コードを指定します。
  - `"lf"`: UNIX形式の改行コード(LF)
  - `"crlf"`: Windows形式の改行コード(CRLF)
  - `"cr"`: Mac形式の改行コード(CR)
  - `"auto"`: ファイルの内容に応じて自動的に判断する

### ESLintの設定ファイルとPrettierの連携について


`.eslintrc.json`のファイル内容
```
{
  "extends": [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```


1. `"extends": ["next/core-web-vitals", "plugin:prettier/recommended"]`
   - `"next/core-web-vitals"`: Next.jsのコアWebVitalsに関するルールを継承
   - `"plugin:prettier/recommended"`: Prettierのルールを継承。これにより、Prettierの設定に従ってコードフォーマットが行われる。

2. `"plugins": ["prettier"]`
   - `"prettier"` プラグインを使用することで、PrettierのルールをESLintに組み込むことができる。

3. `"rules": { "prettier/prettier": "error" }`
   - `"prettier/prettier": "error"` を設定することで、Prettierのルールに反するコードをESLintのエラーとして検出できるようになる。
   - これにより、Prettierの設定と競合するようなルールをESLintで上書きすることを防ぐことができる。

このように、ESLintの設定ファイルにPrettierの設定を組み込むことで、コードフォーマットの一貫性を保ちつつ、ESLintとPrettierの競合を避けることができます。

### package.json に、lint, prettierの起動コマンドを追加

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  },
```

以下のコマンドを実行してコードのフォーマットとESLintを実施
```
npm run format
npm run lint
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