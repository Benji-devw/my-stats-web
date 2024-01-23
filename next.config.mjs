/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
    externalDir: true,
  },
};

export default nextConfig;
