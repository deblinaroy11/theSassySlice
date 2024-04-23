import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg-4.jpg" objectFit="cover" layout="fill" alt="" />  
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
          OH YES ! GiVE LIFE A, WELL BAKED SLICE - theSassy Slice PIZZA&#127829;
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
           28, Ballygunge, Park Circus.
            <br /> Kolkata, 750056
            <br /> (1800) 208 1234
          </p>
          <p className={styles.text}>
          3rd Floor, Acropolis Mall..
            <br /> Kolkata, 750023
            <br /> (1800) 208 4298
          </p>
          <p className={styles.text}>
          1ST FLOOR, 333 Ajoy Nagar.
            <br /> Kolkata, 750041
            <br /> (1800) 208 3269
          </p>
          <p className={styles.text}>
          Judges Court Road, Alipore.
            <br /> Kolkata, 752316
            <br /> (1800) 208 4567
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 10:00 A.M – 10:00 P.M
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 A.M – 6:00 P.M
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
