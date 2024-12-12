/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocolo da URL
        hostname: 'images.tcdn.com.br', // Hostname permitido
        port: '', // Vazio se não houver porta específica
        pathname: '/img/img_prod/**', // Caminho específico (use '**' para wildcard)
      },
    ],
  },}

export default nextConfig
