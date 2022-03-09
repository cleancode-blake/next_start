import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Seo title="HOME" />
      <h1>THIS IS HOME</h1>
    </div>
  );
}
