import styles from "@styles/squeletons.module.css";

export default function ProgressBarSqueleton({cycle}) {
  return (
    <>
      {Array.from({length: cycle}).map((_, index) => (
          <div key={index} className={styles.progressBarSqueleton_container}>
            <div className={styles.mediaSqueleton}></div>
            <div key={index} className={styles.progressBarSqueleton_content}>
              {Array.from({length: cycle}).map((_, id) => (
                <div key={id} className={styles.progressBarSqueleton}></div>
              ))}
            </div>
          </div>
      ))}
    </>
  );
};
