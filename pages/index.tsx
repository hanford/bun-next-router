import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export async function getStaticProps(ctx) {
  return {
    props: {},
  };
}

export default function Home({}) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Next Router sandbox</h1>

        <button onClick={() => router.push("/foo")}>useRouter.push</button>

        {/* <Link href="/">
          <a>Home</a>
        </Link> */}
      </main>
    </div>
  );
}
