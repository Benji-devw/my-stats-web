import styles_layout from "@styles/layout.module.css";
import styles from "@styles/page.module.css";
import Header from "@components/Header";
import Image from "next/image";
import media from '/src/assets/Abstract_Design.png';

export default function LayoutPage({children}) {
  return (
    <main className={styles_layout.main}>
      <div className={styles.bg_blur_center}></div>
      <div className={styles.bg_blur_bottom}>
        <Image
          src={media}
          alt={name}
          // className={styles.card_media}
          width={200}
          height={200}
          priority
        />
      </div>
      
      <Header/>
      
      {children}
      
      {/* <Footer /> */}
    </main>
  );
}
