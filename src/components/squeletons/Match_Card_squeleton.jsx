import styles from "@styles/match_card.module.css";

export default function MatchCardSqueleton () {
  return (
    <>
      <div className={styles.cardSqueleton}></div>
      <div className={styles.cardSqueleton}></div>
      <div className={styles.cardSqueleton}></div>
      <div className={styles.cardSqueleton}></div>
    </>
  );
};
