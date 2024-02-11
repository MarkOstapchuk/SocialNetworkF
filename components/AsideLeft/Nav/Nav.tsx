import styles from "@/components/AsideLeft/asideLeft.module.scss";
import Link from "next/link";
import { paths } from "@/Paths";
const Nav = () => {
 return (
   <ul className={styles.nav}>
     {paths.getLinks().map((item, index)=> (
       <li key={index}><Link href={item.path}>{item.name}</Link></li>
     ))}
   </ul>
 );
};

export default Nav;