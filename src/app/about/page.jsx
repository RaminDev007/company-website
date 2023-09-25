import Image from 'next/image';
import styles from './page.module.css';
import Button from '@/components/Button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/websites.jpg" fill={true} alt="" className={styles.img} />

        <div className={styles.imgTextContainer}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.itemContainer}>
        <div className={styles.leftItem}>
          <h2 className={styles.itemTitle}>Who Are We?</h2>
          <p className={styles.itemDesc}>
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lore lorem
            ipsum dolor lorem <br />
            <br />
            ipsum dolor sit amet, consectetur lorem ipsum dolor lore lorem ipsum
            dolor lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lore
            lorem ipsum dolor
            <br />
            <br />
            ipsum dolor sit amet, consectetur lorem ipsum dolor lore lorem ipsum
            dolor lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lore
            lorem ipsum dolor
          </p>
        </div>
        <div className={styles.rightItem}>
          <h2 className={styles.itemTitle}>What We Do?</h2>
          <p className={styles.itemDesc}>
            lorem ipsum dolor sit amet, consectetur lorem ipsum dolor lore lorem
            ipsum dolor lorem ipsum dolor sit amet, consectetur lorem ipsum
            dolor lore lorem ipsum dolor lorem ipsum dolor sit amet, consectetur
            lorem ipsum dolor lore lorem ipsum dolor <br />
            <br />
            - Creative Illustrations
            <br />
            <br />
            - Brand Identity Designs
            <br />
            <br />- Dynamic Websites
          </p>
          {/* <button className={styles.button}>Contact</button> */}
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
