import styles from "@styles/squeletons.module.css";

export default function MatchCardSqueleton ({cycle}) {
  return (
    <>
      <div className={styles.formTitleSqueleton}></div>
      {Array.from({length: cycle}).map((_, index) => (
        <div key={index} className={styles.matchCardSqueleton}></div>
      ))}
    </>
  );
};
