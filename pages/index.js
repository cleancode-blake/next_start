import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "b628b0f65cc8570a11e0e393168cfb49";
const MOVIE_API =
  "https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Seo title="HOME" />
      <h1>THIS IS HOME</h1>
    </div>
  );
}
