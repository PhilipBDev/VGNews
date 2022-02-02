module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/news/1',
        permanent: true,
      },
    ];
  },
};
