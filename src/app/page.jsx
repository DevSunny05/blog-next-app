import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thoughts Agency.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
          cupiditate odit autem accusantium corporis iusto ullam aut maiores
          fugit earum?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Lern More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={"/brand.png"} alt="" className={styles.brandImg} fill/>
        </div>
      </div>
      <div className={styles.imageContainer} >
        {/* <Image src={} fill className={styles.heroImg}/> */}
      </div>
    </div>
  );
}
