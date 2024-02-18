"use client";
import "@styles/globals.css";
import styles from "@styles/page.module.css";
import squeletons from "@styles/squeletons.module.css";
import {useEffect, useState} from "react";
import PlayerCard from "@components/Player_Card.jsx";
import calculateTotalStats from "@utils/totalStats.js";
import MatchCard from "@/components/Match_Card";
import Link from "next/link";
import LayoutPage from "@/app/pages/match/layoutPage";
import Add_Button from "@/components/Add_Button";
import axios from 'redaxios';
import MatchCardSqueleton from "@components/squeletons/Match_Card_squeleton";
import PlayerCardSqueleton from "@components/squeletons/Player_Card_squeleton";


export default function Home() {
  const [data, setData] = useState([]);
  const [totalStats, setTotalStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = process.env.NODE_ENV === "production" ? "https://my-stats-bis.vercel.app" : "http://localhost:3000";
  
  useEffect(() => {
    setLoading(true);
    setError(null);
    
    axios
      .get(`${API_URL}/api`)
      .then((res) => {
        setData(res.data);
        setTotalStats(calculateTotalStats(res.data.playerMatches));
      })
      .catch((error) => {
        setError(`Fetch error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL]);
  
  return (
    <LayoutPage>
      {loading ? (
        <>
          <div className={styles.matches_grid}>
            <MatchCardSqueleton/>
          </div>
          <div className={styles.players_grid}>
            <PlayerCardSqueleton/>
          </div>
        </>
      ) : error ? (
        <h2 className="">Error: {error}</h2>
      ) : (
        <>
          <div className={styles.matches_grid}>
            <Link href={"/pages/match/post"}><Add_Button> + </Add_Button></Link>
            {data.matches &&
              Object(data.matches).map((match) => (
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
            {data.players &&
              Object(data.players).map((player) => (
                <PlayerCard
                  key={player.id}
                  name={player.name}
                  media={player.media}
                  golden={player.golden}
                  golden_old={player.golden_old}
                  totalStats={totalStats ? totalStats[player.id] : []} // Add totalStats by id
                />
              ))}
            <Add_Button> + </Add_Button>
          </div>
        </>
      )}
    </LayoutPage>
  );
}

