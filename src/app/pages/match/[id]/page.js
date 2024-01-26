"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LayoutPage from "@/app/pages/layoutPage";
import MatchCard from "@/components/Match_Card";
import styles from "@styles/page.module.css";

const MatchPage = () => {
  const params = useParams();
  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost:3000/api/match/${params.id}`, {
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
        // console.log(data);r
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
            team1_name={match.team1_name}
            team2_name={match.team2_name}
            team1_score={match.team1_score}
            team2_score={match.team2_score}
          />
          </div>

          <div className="p-2 mb-4">
            {/* <StatsTable players={match.players} params={params} /> */}
          </div>
        </>
      )}
      </div>
    </LayoutPage>
  );
};

export default MatchPage;
