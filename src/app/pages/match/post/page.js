"use client";
import React, {useEffect, useState} from "react";
import LayoutPage from "@/app/pages/match/layoutPage";
import styles from "@styles/form.module.css";
import Button from "@/components/Button";
import axios from 'ky';

const PostMatch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [new_id, setNew_Id] = useState(null);
  const [totalGoals, setTotalGoals] = useState(0);
  const [prevGoals, setPrevGoals] = useState({
    steph_goals: 0,
    tom_goals: 0,
    pedro_goals: 0,
    quentin_goals: 0,
    ben_goals: 0
  });
  const [playersAbsent, setPlayersAbsent] = useState({
    steph: false,
    tom: false,
    pedro: false,
    quentin: false,
    ben: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = process.env.NODE_ENV === 'production' ? 'https://my-stats-bis.vercel.app' : 'http://localhost:3000';
  
  useEffect(() => {
    setNew_Id(Math.floor(Math.random() * 99999));
    setLoading(false);
  }, []);
  
  // Update playersAbsent when checkbox change
  const handleCheckboxChange = (player) => (e) => {
    setPlayersAbsent(prevState => ({ ...prevState, [player]: e.target.checked }));
  };
  
  // Update total goals when goals change
  const handleGoalsChange = (e, player) => {
    const newGoals = Number(e.target.value);
    const diff = newGoals - prevGoals[player];
    setTotalGoals(totalGoals + diff);
    setPrevGoals({...prevGoals, [player]: newGoals});
  };
  
  // POST request to add match
  const addMatch = async (match) => {
    try {
      await axios.post(`${API_URL}/api/match/post`, {
        body: JSON.stringify(match),
      })
        .json()
        .then((response) => console.log(response))
        .catch((error) => setError(`Fetch error: ${error.message}`));
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
    }
  };
  // POST request to add playersMatch
  const addPlayerMatch = async (playersMatch) => {
    try {
      for (const player of playersMatch) {
        await axios.post(`${API_URL}/api/playersmatches/post`, {
          body: JSON.stringify(player),
        })
          .json()
          .then((response) => console.log(response))
          .catch((error) => setError(`Fetch error: ${error.message}`));
      }
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Total goals not greater than total shoots
    const players = ['steph', 'tom', 'pedro', 'quentin', 'ben'];
    for (let player of players) {
      if (parseInt(e.target[`${player}_goals`].value) > parseInt(e.target[`${player}_shoots`].value)) {
        alert('Les buts ne peuvent pas être supérieurs aux tirs');
        setIsSubmitting(false);
        return;
      }
    }
    // Total assists not greater than total goals
    let totalGoals = 0;
    let totalAssists = 0;
    for (let player of players) {
      totalGoals += parseInt(e.target[`${player}_goals`].value);
      totalAssists += parseInt(e.target[`${player}_assists`].value);
    }
    for (let player of players) {
      if (totalAssists > totalGoals) {
        alert('Les passeD ne peuvent pas être supérieurs aux buts');
        setIsSubmitting(false);
        return;
      }
    }
    
    // Create match and playersMatch objects
    const match = {
      id: new_id,
      media_video: e.target.media_video.value,
      team1_name: e.target.team1_name.value,
      team2_name: e.target.team2_name.value,
      team1_score: Number(e.target.team1_score.value),
      team2_score: Number(e.target.team2_score.value),
      match_average: 0,
      encounter_date: e.target.encounter_date.value,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const playersMatch = [
      {
        player_id: 1,
        match_id: new_id,
        goals: e.target.steph_goals.value,
        assists: e.target.steph_assists.value,
        shoots: e.target.steph_shoots.value,
        average: (100 * e.target.steph_goals.value / e.target.steph_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 2,
        match_id: new_id,
        goals: e.target.tom_goals.value,
        assists: e.target.tom_assists.value,
        shoots: e.target.tom_shoots.value,
        average: (100 * e.target.tom_goals.value / e.target.tom_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 3,
        match_id: new_id,
        goals: e.target.pedro_goals.value,
        assists: e.target.pedro_assists.value,
        shoots: e.target.pedro_shoots.value,
        average: (100 * e.target.pedro_goals.value / e.target.pedro_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 4,
        match_id: new_id,
        goals: e.target.quentin_goals.value,
        assists: e.target.quentin_assists.value,
        shoots: e.target.quentin_shoots.value,
        average: (100 * e.target.quentin_goals.value / e.target.quentin_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        player_id: 5,
        match_id: new_id,
        goals: e.target.ben_goals.value,
        assists: e.target.ben_assists.value,
        shoots: e.target.ben_shoots.value,
        average: (100 * e.target.ben_goals.value / e.target.ben_shoots.value).toFixed(1),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    
    // Check if at least one player has played
    const playerNames = ['steph', 'tom', 'pedro', 'quentin', 'ben'];
    if (Object.values(playersAbsent).every(absent => absent)) {
      alert("Au moins un joueur doit avoir joué");
      setIsSubmitting(false);
      return;
    }
    // Removing players in playersMatch if absent
    for (let player in playersAbsent) {
      if (playersAbsent[player]) {
        for (let i = 0; i < playersMatch.length; i++) {
          if (playersMatch[i].player_id === playerNames.indexOf(player) + 1) {
            playersMatch.splice(i, 1);
            break; // break the loop once the player is found and removed
          }
        }
      }
    }
    
    console.log(match)
    console.log(playersMatch)
    // await addMatch(match);
    // await addPlayerMatch(playersMatch);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Match créé !');
    }, 1000);
  };
  
  // console.log(playersAbsent)
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
              
              <form onSubmit={handleSubmit} className={isSubmitting ? styles.form_disabled : ''}>
                <div className={`${styles.form} ${styles.form_flex}`}>
                  <h3 className={styles.form_page_title}><b>Match</b></h3>
                  
                  <label htmlFor="media_video">Lien NGTV</label>
                  <input type="text" name="media_video" id="media_video"/>
                  
                  <input type="text" name="team1_name" id="team1_name" defaultValue={"Team A"}/>
                  <input type="text" name="team2_name" id="team2_name" defaultValue={"Team B"}/>
                  
                  <label htmlFor="team1_score">Score de Team A</label>
                  <input type="number" name="team1_score" id="team1_score" min={0} />
                  
                  <label htmlFor="team2_score">Score de Team B</label>
                  <input type="number" name="team2_score" id="team2_score" min={0}/>
                  
                  <label htmlFor="encounter_date">Date de la rencontre</label>
                  <input type="date" name="encounter_date" id="encounter_date" />
                  
                  <label htmlFor="encounter_time">Heure de la rencontre</label>
                  <input type="time" name="encounter_time" id="encounter_time" defaultValue="15:30"/>
                </div>
                
                <h3 className={styles.form_page_title}><b>Joueurs</b></h3>
                <div className={` ${styles.form_flex}`}>
                  
                  <div className={`${styles.form} ${styles.form_grid}`}>
                    <label htmlFor="">Buts</label>
                    <label htmlFor="">Passes D</label>
                    <label htmlFor="">Tirs</label>
                  </div>
                  <div style={{position: "relative"}}>
                  <h3>Steph</h3>
                    <label className={styles.not_playing_label} htmlFor="steph_did_not_play">absent</label>
                    <input className={styles.not_playing_input} type="checkbox" name="steph_did_not_play" id="steph_did_not_play" onChange={handleCheckboxChange('steph')}/>
                  <div className={`${styles.form} ${styles.form_grid} ${playersAbsent.steph ? styles.not_playing : ''}`}>
                    <input type="number" min={0} name="steph_goals" id="goals" placeholder="Buts" onChange={(e) => handleGoalsChange(e, 'steph_goals')}/>
                    <input type="number" min={0} name="steph_assists" id="assists" placeholder="PassesD"/>
                    <input type="number" min={0} name="steph_shoots" id="shoots" placeholder="Tirs"/>
                  </div>
                  </div>
                  <div style={{position: "relative"}}>
                  <h3>Tom</h3>
                    <label className={styles.not_playing_label} htmlFor="tom_did_not_play">absent</label>
                    <input className={styles.not_playing_input} type="checkbox" name="tom_did_not_play" id="tom_did_not_play" onChange={handleCheckboxChange('tom')}/>
                  <div className={`${styles.form} ${styles.form_grid} ${playersAbsent.tom ? styles.not_playing : ''}`}>
                    <input type="number" min={0} name="tom_goals" id="tom_goals" placeholder="Buts" onChange={(e) => handleGoalsChange(e, 'tom_goals')}/>
                    <input type="number" min={0} name="tom_assists" id="tom_assists" placeholder="PassesD"/>
                    <input type="number" min={0} name="tom_shoots" id="tom_shoots" placeholder="Tirs"/>
                  </div>
                  </div>
                  <div style={{position: "relative"}}>
                  <h3>Pedro</h3>
                    <label className={styles.not_playing_label} htmlFor="pedro_did_not_play">absent</label>
                    <input className={styles.not_playing_input} type="checkbox" name="pedro_did_not_play" id="pedro_did_not_play" onChange={handleCheckboxChange('pedro')}/>
                  <div className={`${styles.form} ${styles.form_grid} ${playersAbsent.pedro ? styles.not_playing : ''}`}>
                    <input type="number" min={0} name="pedro_goals" id="goals" placeholder="Buts" onChange={(e) => handleGoalsChange(e, 'pedro_goals')}/>
                    <input type="number" min={0} name="pedro_assists" id="assists" placeholder="PassesD"/>
                    <input type="number" min={0} name="pedro_shoots" id="shoots" placeholder="Tirs"/>
                  </div>
                  
                  </div>
                  <div style={{position: "relative"}}>
                  <h3>Quentin</h3>
                    <label className={styles.not_playing_label} htmlFor="quentin_did_not_play">absent</label>
                    <input className={styles.not_playing_input} type="checkbox" name="quentin_did_not_play" id="quentin_did_not_play" onChange={handleCheckboxChange('quentin')}/>
                  <div className={`${styles.form} ${styles.form_grid} ${playersAbsent.quentin ? styles.not_playing : ''}`}>
                    <input type="number" min={0} name="quentin_goals" id="goals" placeholder="Buts" onChange={(e) => handleGoalsChange(e, 'quentin_goals')}/>
                    <input type="number" min={0} name="quentin_assists" id="assists" placeholder="PassesD"/>
                    <input type="number" min={0} name="quentin_shoots" id="shoots" placeholder="Tirs"/>
                  </div>
                  </div>
                  <div style={{position: "relative"}}>
                  <h3>Ben</h3>
                    <label className={styles.not_playing_label} htmlFor="ben_did_not_play">absent</label>
                    <input className={styles.not_playing_input} type="checkbox" name="ben_did_not_play" id="ben_did_not_play" onChange={handleCheckboxChange('ben')}/>
                  <div className={`${styles.form} ${styles.form_grid} ${playersAbsent.ben ? styles.not_playing : ''}`}>
                    <input type="number" min={0} name="ben_goals" id="goals" placeholder="Buts" onChange={(e) => handleGoalsChange(e, 'ben_goals')}/>
                    <input type="number" min={0} name="ben_assists" id="assists" placeholder="PassesD"/>
                    <input type="number" min={0} name="ben_shoots" id="shoots" placeholder="Tirs"/>
                  </div>
                  
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
