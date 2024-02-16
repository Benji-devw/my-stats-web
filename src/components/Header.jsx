import styles_layout from "@styles/layout.module.css";
import styles from "@styles/page.module.css";
import Image from "next/image";

export default function Header () {
  return (
    <header>
      <div className={styles_layout.description}>
        <p>
          <code className={styles.code}>MY STATS v1</code>
        </p>
      </div>
      
      <div className={styles_layout.header}>
        <div>
          <code>MENU</code>
        </div>
      </div>
    </header>
  );
}