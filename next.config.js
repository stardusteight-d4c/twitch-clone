/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com', 'robohash.org'],
  },
}
