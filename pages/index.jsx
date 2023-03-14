import React from "react";
import styles from "../styles/index.module.scss";
import Link from "next/link";
function index() {
  return (
    <div className={styles.page}>

      <div className={styles.introduction}>
        <h1> Welcome to My Portofolio</h1>
        <div className={styles.introduction_Text}>  
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, facilis unde quod doloribus sit quidem aut perspiciatis quae laboriosam magnam laudantium reprehenderit velit delectus ad totam ut dolores, sint nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sequi, velit, quasi dolor, corrupti iusto doloribus quibusdam tenetur error harum labore at enim sint quas unde! Atque placeat aspernatur quas! consectetur, adipisicing elit. Voluptate vitae odio facere ut porro! Culpa autem incidunt, sed cupiditate nihil saepe vel error fuga quo dolore velit praesentium! Soluta, illo.</p>
        <div><img src="/macEmoji.png" /></div>
        </div>
        <div></div>
      </div>
      <h1>Choose a Component!</h1>
      <div className={styles.components}>
      <Link href="/cardHover">
          <div className={styles.component}>
            <h3>Card Hover Effect</h3>{" "}
            <i className="fa-regular fa-laptop-code" />{" "}
          </div>  
        </Link>
        <Link href="/visaCard">
          {" "}
          <div className={styles.component}>
            <h3>Card Visa Animation</h3> <i class="fa-brands fa-cc-visa" />
          </div>
        </Link>
      
        <Link href="/DogGallery">
          <div className={styles.component}>
            <h3>Dog Gallery Effect</h3>{" "}
            <i className="fa-regular fa-dog"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default index;
