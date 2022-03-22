import Image from "next/image";
import { useState, useEffect } from "react";
import Seo from "../components/Seo";

const Image_path = "https://image.tmdb.org/t/p/";

export default function Home({ data }) {
  console.log(data);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(`/movie/upcoming`)
      .then((res) => res.json())
      .then(({ results }) => setMovies(results));
    console.log(movies);
  }, []);

  return (
    <div>
      <Seo title="HOME" />
      <h1>THIS IS HOME</h1>
      <div id="movie-container">
        {movies?.map((res) => (
          <div key={res.id} className={"movie"}>
            <Image
              src={`${Image_path}w400${res.poster_path}`}
              alt={res.title}
              width={200}
              height={300}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        #movie-container {
          display: flex;
          width: 90vw;
          flex-wrap: wrap;
          gap: 50px;
          justify-content: center;
        }
        .movie {
          width: 200px;
          height: 300px;
        }
        img {
          border-radius: 20px;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}

// Use getServerSideProps
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=b628b0f65cc8570a11e0e393168cfb49&language=en-US`
  );
  const data = await res.json();
  console.log(data);

  // Pass data to the page via props
  return { props: { data } };
}
