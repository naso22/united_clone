# ベースイメージの指定
FROM node:14

# コンテナ内での作業ディレクトリの設定
WORKDIR /app

# package.jsonとpackage-lock.jsonのコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# ポートのエクスポート
EXPOSE 8080

# アプリケーションのビルド
RUN npm run build

# コンテナ起動時のコマンド実行
CMD ["npm", "run", "serve"]