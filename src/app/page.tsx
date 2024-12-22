import InteractiveToDoList from "./compoments/InterActiveToDoBox";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mother}>
        <div style={{height:"50px"}}></div>
        <InteractiveToDoList />
        <p className={styles.copyright}>© 2023 Banyar</p>
    </div>
  );
}
