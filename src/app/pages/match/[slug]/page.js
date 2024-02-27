"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from "react";
import LayoutPage from "@/app/pages/match/layoutPage";
import MatchCard from "@/components/Match_Card";
import styles from "@styles/page.module.css";
import SingleChart from "@components/PlayerMatchStats";
import axios from 'redaxios';
import calculateTotalStats from "@utils/totalStats";

const MatchPage = () => {
  const params = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL =
    process.env.NODE_ENV === "production" ? "https://my-stats-bis.vercel.app" : "http://localhost:3000";
  

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    axios
      .get(`${API_URL}/api/match/${params.slug}`)
      .then((res) => {
        setMatch(res.data.match);
      })
      .catch((error) => {
        setError(`Fetch error: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_URL, params.slug]);

  // console.log(match);
  return (
    <LayoutPage>
      <div className={styles.grid}>
        {loading ? (
          <h2 className="">Loading...</h2>
        ) : error ? (
          <h2 className="">Error: {error}</h2>
        ) : (
          <>
            <h2>Match {params.slug}</h2>

            <div className={styles.match_page_grid}>
              <MatchCard
                key={params.slug}
                id={params.slug}
                date={match.encounter_date}
                media_video={match.media_video}
                team1_name={match.team1_name}
                team2_name={match.team2_name}
                team1_score={match.team1_score}
                team2_score={match.team2_score}
              />
            </div>

            <div className={styles.chart}>
              {/*<StatsChart players={match.Players} />*/}
              <SingleChart players={match.Players} />
            </div>
          </>
        )}
      </div>
    </LayoutPage>
  );
};

export default MatchPage;
