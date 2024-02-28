import styles from "@styles/squeletons.module.css";

export default function PlayerCardSqueleton({cycle}) {
  return (
    <>
      {Array.from({length: cycle}).map((_, index) => (
        <div key={index} className={styles.playersCardSqueleton}></div>
      ))}
    </>
  );
};
