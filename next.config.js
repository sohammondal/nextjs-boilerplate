/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ENV: process.env.ENV,
    HOST: process.env.HOST,
  },
}

module.exports = nextConfig
