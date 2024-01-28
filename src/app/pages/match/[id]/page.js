"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LayoutPage from "@/app/pages/layoutPage";
import MatchCard from "@/components/Match_Card";
import styles from "@styles/page.module.css";
import StatsChart from "@/components/chart";
// import PlayerCard from "@/components/Player_Card.jsx";


const MatchPage = () => {
  const params = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://my-stats-bis.vercel.app/page/match/${params.id}`, {
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
        // Set the match data
        setMatch(data.match);
      })
      .catch((error) => {
        setError(`Fetch error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  console.log(match);
  return (
    <LayoutPage>
      <div className={styles.grid}>
        {loading ? (
          <h2 className="">Loading...</h2>
        ) : error ? (
          <h2 className="">Error: {error}</h2>
        ) : (
          <>
            <h2>Match {params.id}</h2>

            <div className={styles.match_page_grid}>
              <MatchCard
                key={params.id}
                id={params.id}
                date={match.encounter_date}
                media_video={match.media_video}
                team1_name={match.team1_name}
                team2_name={match.team2_name}
                team1_score={match.team1_score}
                team2_score={match.team2_score}
              />
            </div>

            <div className={styles.chart}>
              Filtrer les stats par joueur:
              <StatsChart players={match.Players} />
            </div>

            {/* <div className={styles.players_grid}>
              {Object(match.Players).map((player) => (
                  <PlayerCard
                    key={player.id}
                    name={player.name}
                    media={player.media}
                    golden={player.golden}
                    golden_old={player.golden_old}
                    totalStats={totalStats ? totalStats[player.id] : []} // Add totalStats by id
                  />
                ))}
            </div> */}
          </>
        )}
      </div>
    </LayoutPage>
  );
};

export default MatchPage;
