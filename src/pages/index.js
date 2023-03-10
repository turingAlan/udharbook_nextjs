import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/Navigation";
import MoneySection from "@/components/MoneySection";
import WelcomeSection from "@/components/WelcomeSection";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dataChange, setDataChange] = useState(false);
  return (
    <>
      <Head>
        <title>Hisab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <WelcomeSection onChange={dataChange} />
      <div class="io-container">
        <MoneySection section="Gave" setChange={setDataChange} status="add" />
        <MoneySection section="Took" setChange={setDataChange} status="add" />
      </div>
    </>
  );
}
