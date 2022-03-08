import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  // console.log(router);
  return (
    <div>
      <h1>THIS IS HOME</h1>
    </div>
  );
}
