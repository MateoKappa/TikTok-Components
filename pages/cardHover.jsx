import React from "react";
import styles from "../styles/cardHover.module.scss";
function CardHover() {
  const Container = ({i, text}) => {
    return (
      <div className={styles.box}>
        <div className={styles.up}>
          <i class={i}></i>
        </div>
        <div className={styles.down}>
          {text}
          <button> Read More</button>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.page}>
      <Container
        i="fa-light fa-chart-mixed"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint quod repudiandae quisquam deleniti pr "
      />
      <Container
        i="fa-regular fa-laptop-code"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint quod repudiandae quisquam deleniti pr "
      />
      <Container
        i="fa-light fa-book-open-cover"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint quod repudiandae quisquam deleniti pr "
      />
    </div>
  );
}
export default CardHover;
