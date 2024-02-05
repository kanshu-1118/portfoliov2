/** @type {import('next').NextConfig} */

/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/ecc/creator/sakuhin/2022/portfolio/wd2a17";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? SUB_DIRECTORY : ".",
}

module.exports = nextConfig
