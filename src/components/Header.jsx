import styles_layout from "@styles/layout.module.css";
// import styles from "@styles/page.module.css";
// import Image from "next/image";

export default function Header () {
  return (
    <header>
      <div className={styles_layout.description}>
        <h1>MY STATS v1</h1>
      </div>
      
      {/*<div className={styles_layout.header}>*/}
      {/*  <div>*/}
      {/*    <code>MENU</code>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  );
}