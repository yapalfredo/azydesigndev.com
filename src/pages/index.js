import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>AZY Design and Development LLC</title>
        <meta
          name="description"
          content="AZY Design and Development LLC: A passionate team of upcoming designers and developers providing UI/UX design and software development services"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            AZY Design and Development LLC&nbsp;
            <code className={styles.code}>
              <a href="mailto:management@azydesigndev.com">
                management@azydesigndev.com
              </a>
            </code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/comingsoon.png"
            alt="Coming Soon"
            width={300}
            height={300}
            priority
          />
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
