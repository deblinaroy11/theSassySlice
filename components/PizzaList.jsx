import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      {/* <h1 className={styles.title}>It's not just a Pizza, It's <br/> An EXPERIENCE</h1> */}
      <p className={styles.desc}>
      Our Menu has something for everyone. Stop by for a quick bite or get your favourites delivered right to your door.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius non inventore odio blanditiis quidem.
      </p>
      <p className={styles.desc}>
      RIGHT PLACE FOR YOUR<br/> PIZZA LOVE !
      </p>
      <div className={styles.wrapper}>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
          <PizzaCard/>
      </div>
    </div>
  );
};

export default PizzaList;
