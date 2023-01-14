import React from "react";
import styles from "../styles/index.module.scss";
import Link from "next/link";
function index() {
  return (
    <div className={styles.page}>
      <h1>Choose a Component!</h1>
      <div className={styles.components}>
        <Link href="/visaCard">
          {" "}
          <div className={styles.component}>
            {" "}
            <h3>Card Hover</h3> <i className="fa-regular fa-laptop-code" />
          </div>
        </Link>
        <Link href="/cardHover">
          {" "}
          <div className={styles.component}>
            {" "}
            <h3>Card Hover</h3>
            <i class="fa-brands fa-cc-visa"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default index;
