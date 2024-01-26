import styles from "@styles/match_card.module.css";
import styles_button from "@styles/button.module.css";
import Button from "@/components/Button";

const MatchCard = ({
  team1_name, 
  team2_name,
  team1_score,
  team2_score
}) => {
  // console.log(totalStats);
  return (
    <a
      href="#"
      className={styles.card}
      // target="_blank"
      rel="noopener noreferrer"
    >
      <h3 className={styles.card_title}>
        {team1_name} vs {team2_name}
      </h3>
      <h3 className={styles.card_title}>
      <b>{team1_score} - {team2_score}</b>
      </h3>
      <h2><span>-&gt;</span></h2>


      <p>
        <Button className={styles_button.button}>Voir le match sur NGTV</Button>
      </p>

      <p>
        {/* Matchs joués: <b>{totalStats.matchCount}</b> */}
      </p>
    </a>
  );
};

export default MatchCard;
