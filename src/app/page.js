"use client";
//TODO: ADD AXIOS for remove use Client
import "@styles/globals.css";
import styles from "@styles/page.module.css";
import { useEffect, useState } from "react";
import PlayerCard from "@components/Player_Card.jsx";
import calculateTotalStats from "@utils/totalStats.js";
import MatchCard from "@/components/Match_Card";
import Link from "next/link";
import LayoutPage from "@/app/pages/layoutPage";
import Button from "@/components/Button";

export default function Home() {
  const [datas, setDatas] = useState([]);
  const [totalStats, setTotalStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL =
    process.env.NODE_ENV === "production" ? "https://my-stats-bis.vercel.app/api" : "http://localhost:3000/api";

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(API_URL, {
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
      .then((data) => {
        setDatas(data);
        setTotalStats(calculateTotalStats(data.playerMatches));
      })
      .catch((error) => {
        setError(`Fetch error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <LayoutPage>
      {loading ? (
        <h2 className="">Loading...</h2>
      ) : error ? (
        <h2 className="">Error: {error}</h2>
      ) : (
        <>
          <div className={""}>
            <Button>
              <Link href="/pages/match/post">Créer un match</Link>
            </Button>
          </div>

          <div className={styles.matches_grid}>
            {datas.matches &&
              Object(datas.matches).map((match) => (
                <Link href={`/pages/match/${match.id}`} key={match.id}>
                  <MatchCard
                    key={match.id}
                    id={match.id}
                    // media_video={match.media_video}
                    date={match.encounter_date}
                    team1_name={match.team1_name}
                    team2_name={match.team2_name}
                    team1_score={match.team1_score}
                    team2_score={match.team2_score}
                  />
                </Link>
              ))}
          </div>

          <div className={styles.players_grid}>
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
        </>
      )}
    </LayoutPage>
  );
}
