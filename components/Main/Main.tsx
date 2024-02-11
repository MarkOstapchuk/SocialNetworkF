import styles from "./Main.module.scss";
import React from "react";
async function getData() {
  const res = await fetch(`${process.env.LOCALHOST}/members/1`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Main({children}: Readonly<{children: React.ReactNode; }>) {
  const data = await getData()
  console.log(data);
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};