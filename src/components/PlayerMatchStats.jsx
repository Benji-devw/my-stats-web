import React from 'react';
import styles from "@styles/player_match_stats.module.css";
import Image from "next/image";

export default function PlayerMatchStats({players}) {
  
  // get greaters values
  const greatGoals = players.map((player) => player.PlayersMatches.goals);
  const greatGoalsMax = Math.max(...greatGoals);
  const greatAssists = players.map((player) => player.PlayersMatches.assists);
  const greatAssistsMax = Math.max(...greatAssists);
  const greatShoots = players.map((player) => player.PlayersMatches.shoots);
  const greatShootsMax = Math.max(...greatShoots);
  
  return (
    <article className={`${styles.container} fadeIn`}>
      {
        players.map((player) => (
          <div className={styles.content} key={player.id}>
            <h2><Image
              src={player.media}
              alt={name}
              className={styles.card_media}
              width={60}
              height={60}
              priority
            /></h2>
            <div className={`${styles.progress_bar_container}`}>
              
              <div className={`${styles.progress_bar}`}>
                <div
                  style={{
                    width: `${(player.PlayersMatches.goals / greatGoalsMax) * 99}%`,
                    transition: "width 1s ease-in-out"
                  }}
                  className={`${styles.progress_goals_bis} ${styles.progress_goals}`}>
                  <span className={styles.progress_text}>Buts</span>
                  <span className={styles.progress_text}>{player.PlayersMatches.goals}</span>
                </div>
              </div>
              
              <div className={`${styles.progress_bar}`}>
                <div
                  style={{width: `${(player.PlayersMatches.assists / greatAssistsMax) * 99}%`}}
                  className={`${styles.progress_assists_bis} ${styles.progress_assists}`}>
                  <span className={styles.progress_text}>PassesD</span>
                  <span className={styles.progress_text}>{player.PlayersMatches.assists}</span>
                </div>
              </div>
              
              <div className={`${styles.progress_bar}`}>
                <div
                  style={{width: `${(player.PlayersMatches.shoots / greatShootsMax) * 99}%`}}
                  className={`${styles.progress_shoots_bis} ${styles.progress_shoots}`}>
                  <span className={styles.progress_text}>Tirs</span>
                  <span className={styles.progress_text}>{player.PlayersMatches.shoots}</span>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </article>
  );
}