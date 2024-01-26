"use client";

//TODO: ADD AXIOS for remove use Client
import Image from "next/image";
import styles from "@styles/page.module.css";
import "@styles/globals.css";
import { useEffect, useState } from "react";
import PlayerCard from "@components/Player_Card.jsx";
import calculateTotalStats from "@utils/totalStats.js";


export default function Home() {
  const [datas, setDatas] = useState([]);
  const [totalStats, setTotalStats] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDatas(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  useEffect(() => {
    if (datas.playerMatches) {
      const stats = calculateTotalStats(datas.playerMatches);
      setTotalStats(stats);
    }
  }, [datas]);
  
  // console.log(datas.players && Object(datas.players).map((player) => player.name));
  // console.log(datas);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>MY STATS</code>
        </p>
        <div>
          <a
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {datas.players &&
          Object(datas.players).map((player) => (
            <PlayerCard
              key={player.id}
              name={player.name}
              media={player.media}
              golden={player.golden}
              golden_old={player.golden_old}
              totalStats={totalStats ? totalStats[player.id] : []} // Add totalStats by id
            />
          ))}
      </div>
    </main>
  );
}
