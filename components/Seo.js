import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Movie App</title>
    </Head>
  );
}
