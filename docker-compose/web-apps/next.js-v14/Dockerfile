FROM node:20

WORKDIR /app

COPY ./nextjs-sample/package*.json ./

# 依存関係のインストール
RUN npm install

# プロジェクトファイルのコピー
COPY ./nextjs-sample .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
