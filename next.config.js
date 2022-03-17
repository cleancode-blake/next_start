module.exports = {
  images: {
    domains: [
      "tmdb.org",
      "themoviedb.org",
      "image.tmdb.org",
      "api.themoviedb.org",
      "www.clipartmax.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
};
