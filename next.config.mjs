/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Protocolo da URL
        hostname: '**', // Hostname permitido
      },
      {
        protocol: 'https', // Protocolo da URL
        hostname: '**', // Hostname permitido
      },
    ],
  },
}

export default nextConfig
