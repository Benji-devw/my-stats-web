import styles from "@styles/page.module.css";
import Image from "next/image";

const PayerCard = ({
  name,
  media,
  golden,
  golden_old,
  totalStats,
}) => {
  console.log(totalStats);
  return (
    <a
      href="#"
      className={styles.card}
      // target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={styles.title_card}>
        <div className={""}>
          <Image
            src={media}
            alt={name}
            className={styles.card_media}
            width={100}
            height={100}
            priority
          />
          {golden === 1 && (
            <Image
              src={"/ballon-d-or-2.png"}
              alt={name}
              className={styles.card_media_or}
              width={40}
              height={40}
              priority
            />
          )}
        </div>
        {/* <span>-&gt;</span> */}

        {name}
      </h2>

      {/* <p>
        {golden === 1 && (
          <Image
            src={"/ballon-d-or-2.png"}
            alt={name}
            className={styles.card_media}
            width={50}
            height={50}
            priority
          />
        )}
      </p> */}

      <p>
        <b>STATS : </b>
      </p>

      <p>
        Matchs joués: <b>{totalStats.matchCount}</b>
      </p>
      <p>
        Buts: <b>{totalStats.totalGoals}</b>
      </p>
      <p>
        Tirs: <b>{totalStats.totalShoots}</b>
      </p>
      <p>
        Passes D: <b>{totalStats.totalAssists}</b>{" "}
      </p>
      <p>
        A été <b>{golden_old}</b> fois ballon d'or{" "}
      </p>
    </a>
  );
};

export default PayerCard;
