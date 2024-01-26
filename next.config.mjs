/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
    externalDir: true,
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/player/:player_id',
  //       destination: '/api/player/[id]/route',
  //     },
  //   ];
  // },
};

export default nextConfig;
