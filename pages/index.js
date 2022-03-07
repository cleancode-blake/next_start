import { useRouter } from "next/router";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const router = useRouter();
  // console.log(router);
  return (
    <div>
      <NavBar></NavBar>
      <h1>THIS IS HOME</h1>
    </div>
  );
}
