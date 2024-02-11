import styles from "./Main.module.scss";
import React from "react";
const Main = ({children}: React.ReactNode) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default Main;