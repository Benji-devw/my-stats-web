"use client";
import React, { useEffect, useState } from "react";
import LayoutPage from "@/app/pages/layoutPage";
import styles from "@styles/form.module.css";
import Button from "@/components/Button";
// import PlayerCard from "@/components/Player_Card.jsx";

const PostMatch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [new_id, setNew_Id] = useState(null);
  const API_URL = process.env.NODE_ENV === 'production' ? 'https://my-stats-bis.vercel.app/' : 'http://localhost:3000/api';

  useEffect(() => {
    setNew_Id(Math.floor(Math.random() * 99999));
  }, []);

  // Add post mehtod
  const addMatch = async (match) => {
    try {
      const res = await fetch(`https://my-stats-bis.vercel.app/api/match/route`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(match),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
    }
  };

  const addPlayerMatch = async (playerMatch) => {
    try {
      for (const player of playerMatch) {
        console.log(player);
      const res = await fetch(`https://my-stats-bis.vercel.app/api/playersmatches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });
      
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      
      const data = await res.json();
      console.log(data);
    }
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (parseInt(e.target.steph_goals.value) > parseInt(e.target.steph_shoots.value) ||
      parseInt(e.target.tom_goals.value) > parseInt(e.target.tom_shoots.value) ||
      parseInt(e.target.pedro_goals.value) > parseInt(e.target.pedro_shoots.value) ||
      parseInt(e.target.quentin_goals.value) > parseInt(e.target.quentin_shoots.value) ||
      parseInt(e.target.ben_goals.value) > parseInt(e.target.ben_shoots.value)) {
      alert('Les buts ne peuvent pas être supérieurs aux tirs');  
      return;
    }
    
    //TODO: defined team1_score by total player goals 
    const match = {
      id: new_id,
      media_video: e.target.media_video.value,
      team1_name: e.target.team1_name.value,
      team2_name: e.target.team2_name.value,
      team1_score: e.target.team1_score.value,
      team2_score: e.target.team2_score.value,
      match_average: 0,
      encounter_date: e.target.encounter_date.value + ' ' + e.target.encounter_time.value,
      created_at: new Date(),
      updated_at: new Date(),
    };

    const matchPlayers = [
      {
        player_id: 1,
        match_id: new_id,
        goals: e.target.steph_goals.value,
        assists: e.target.steph_assists.value,
        shoots: e.target.steph_shoots.value,
        average: (10 * e.target.steph_goals.value / e.target.steph_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        match_id: new_id,
        goals: e.target.tom_goals.value,
        assists: e.target.tom_assists.value,
        shoots: e.target.tom_shoots.value,
        average: (10 * e.target.tom_goals.value / e.target.tom_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        match_id: new_id,
        goals: e.target.pedro_goals.value,
        assists: e.target.pedro_assists.value,
        shoots: e.target.pedro_shoots.value,
        average: (10 * e.target.pedro_goals.value / e.target.pedro_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        match_id: new_id,
        goals: e.target.quentin_goals.value,
        assists: e.target.quentin_assists.value,
        shoots: e.target.quentin_shoots.value,
        average: (10 * e.target.quentin_goals.value / e.target.quentin_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        match_id: new_id,
        goals: e.target.ben_goals.value,
        assists: e.target.ben_assists.value,
        shoots: e.target.ben_shoots.value,
        average: (10 * e.target.ben_goals.value / e.target.ben_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]

    // console.log(match);
    // console.log(matchPlayer);
    await addMatch(match);
    addPlayerMatch(matchPlayers);
  };

  

  return (
    <LayoutPage>
      <div className={""}>
        {
          loading ? (
            <h2 className="">Loading...</h2>
          ) : error ? (
            <h2 className="">Error: {error}</h2>
          ) : (
          <>
            <h2>Création Match :</h2>

            {/* <div className={styles.form}> */}
            <form  onSubmit={handleSubmit}>
              <div className={`${styles.form} ${styles.form_flex}`}>
              <h3 className={styles.form_page_title}><b>Match</b></h3>

                <label htmlFor="media_video">Lien NGTV</label>
                <input type="text" name="media_video" id="media_video" defaultValue={"https://www.youtube.com/watch?v=Q5mHPo2yDG8"}/>

                {/* <label htmlFor="team1_name">Nom de l'équipe 1</label> */}
                <input type="text" name="team1_name" id="team1_name" defaultValue={"Team A"}/>

                {/* <label htmlFor="team2_name">Nom de l'équipe 2</label> */}
                <input type="text" name="team2_name" id="team2_name" defaultValue={"Team B"}/>

                <label htmlFor="team1_score">Score de Team A</label>
                <input type="number" name="team1_score" id="team1_score"/>

                <label htmlFor="team2_score">Score de Team B</label>
                <input type="number" name="team2_score" id="team2_score"/>

                <label htmlFor="encounter_date">Date de la rencontre</label>
                <input type="date" name="encounter_date" id="encounter_date"/>

                <label htmlFor="encounter_time">Heure de la rencontre</label>
                <input type="time" name="encounter_time" id="encounter_time"/>
              </div>

              <h3 className={styles.form_page_title}><b>Joueurs</b></h3>
              <div className={` ${styles.form_flex}`}>

                <div className={`${styles.form} ${styles.form_grid}`}>
                <label htmlFor="">Buts</label>
                <label htmlFor="">Passes D</label>
                <label htmlFor="">Tirs</label>
              </div>
              <h3>Steph</h3>
              <div className={`${styles.form} ${styles.form_grid}`}>
                <input type="number" name="steph_goals" id="goals" placeholder="Buts" />
                <input type="number" name="steph_assists" id="assists" placeholder="PassesD" />
                <input type="number" name="steph_shoots" id="shoots" placeholder="Tirs" />
              </div>
              <h3>Tom</h3>
              <div className={`${styles.form} ${styles.form_grid}`}>
                <input type="number" name="tom_goals" id="goals" placeholder="Buts" />
                <input type="number" name="tom_assists" id="assists" placeholder="PassesD" />
                <input type="number" name="tom_shoots" id="shoots" placeholder="Tirs" />
              </div>
              <h3>Pedro</h3>
              <div className={`${styles.form} ${styles.form_grid}`}>
                <input type="number" name="pedro_goals" id="goals" placeholder="Buts"/>
                <input type="number" name="pedro_assists" id="assists" placeholder="PassesD"/>
                <input type="number" name="pedro_shoots" id="shoots" placeholder="Tirs"/>
              </div>
              <h3>Quentin</h3>
              <div className={`${styles.form} ${styles.form_grid}`}>
                <input type="number" name="quentin_goals" id="goals" placeholder="Buts"  />
                <input type="number" name="quentin_assists" id="assists" placeholder="PassesD"/>
                <input type="number" name="quentin_shoots" id="shoots" placeholder="Tirs" />
              </div>
              <h3>Ben</h3>
              <div className={`${styles.form} ${styles.form_grid}`}>
                <input type="number" name="ben_goals" id="goals" placeholder="Buts" />
                <input type="number" name="ben_assists" id="assists" placeholder="PassesD"/>
                <input type="number" name="ben_shoots" id="shoots" placeholder="Tirs" />
              </div>
              </div>

              <Button type="submit" value="Envoyer">
                Envoyer
              </Button>
            </form>
          </>
          )
        }
      </div>
    </LayoutPage>
  );
};

export default PostMatch;
