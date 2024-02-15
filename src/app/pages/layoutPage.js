import styles_layout from "@styles/layout.module.css";
import styles from "@styles/page.module.css";
import Image from "next/image";

export default function LayoutPage({children}) {
  return (
    <main className={styles_layout.main}>
      <div className={styles.center}></div>
      
      <div className={styles_layout.description}>
        <p>
          <code className={styles.code}>MY STATS</code>
        </p>
        <div>
          <a
            href="#"
            // target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.logo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      
      {children}
      
      {/* <Footer /> */}
    </main>
  );
}
