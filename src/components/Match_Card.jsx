import styles from "@styles/match_card.module.css";
import styles_button from "@styles/button.module.css";
import Button from "@/components/Button";
import Link from "next/link";

const MatchCard = ({
                     date,
                     media_video,
                     team1_name,
                     team2_name,
                     team1_score,
                     team2_score,
                   }) => {
  // console.log(media_video);
  return (
    <div className={`${styles.card} fadeIn`}>
      <h3 className={styles.card_title}>
        {team1_name} vs {team2_name}
      </h3>
      <h3 className={styles.card_title}>
        <b>
          {team1_score} - {team2_score}
        </b>
      </h3>
      
      {media_video ? (
        <Button className={styles_button.button}>
          <Link href={media_video}>Voir le match sur NGTV </Link>
        </Button>
      ) : (<h3><span>-&gt;</span></h3>)}
      
      <code>
        Date: <b>{date}</b>
      </code>
    </div>
  );
};

export default MatchCard;