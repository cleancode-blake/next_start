const MOVIE_API = "https://api.themoviedb.org/3/movie";
const API_KEY = process.env.API_KEY;

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
  async rewrites() {
    return [
      {
        source: "/movie/upcoming",
        destination: `${MOVIE_API}/upcoming?api_key=${API_KEY}&language=en-US`,
      },
    ];
  },
};
