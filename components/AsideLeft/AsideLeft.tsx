import styles from './asideLeft.module.scss'
import Nav from "@/components/AsideLeft/Nav/Nav";
import Image from "next/image";
const AsideLeft = () => {
 return (
  <aside className={styles.aside}>
      <Image src={'/wakatime-2.svg'} width='50' height='50' alt={''} className={styles.logo}></Image>
    <Nav></Nav>
  </aside>
 );
};

export default AsideLeft;