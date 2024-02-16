import styles_layout from "@styles/layout.module.css";
import styles from "@styles/page.module.css";
import Header from "@components/Header";

export default function LayoutPage({children}) {
  return (
    <main className={styles_layout.main}>
      <div className={styles.center}></div>
      
      <Header/>
      
      {children}
      
      {/* <Footer /> */}
    </main>
  );
}
