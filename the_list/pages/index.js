import Link from "next/link";
import React from "react";
import { Navbar, Footer } from "../components";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful
        content. Lorem ipsum may be used as a placeholder before final copy is
        available. It is also used to temporarily replace text in a process
        called greeking, which allows designers to consider the form of a
        webpage or publication, without the meaning of the text influencing the
        design.
      </p>
      <p className={styles.text}>
        Lorem ipsum is a placeholder text commonly used to demonstrate the
        visual form of a document or a typeface without relying on meaningful
        content. Lorem ipsum may be used as a placeholder before final copy is
        available. It is also used to temporarily replace text in a process
        called greeking, which allows designers to consider the form of a
        webpage or publication, without the meaning of the text influencing the
        design.
      </p>
      <Link className={styles.btn} href="/Workers/WorkersList">
        See Workers Listing
      </Link>
    </div>
  );
};

export default index;
