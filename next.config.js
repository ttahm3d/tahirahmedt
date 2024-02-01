/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.hashnode.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
