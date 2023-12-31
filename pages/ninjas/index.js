export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      ninjas: data,
    },
  };
};

import Link from "next/link";
import React from "react";
import styles from "./../../styles/Ninjas.module.css";

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>

      {ninjas.map((ninja) => (
        <Link
          href={"/ninjas/" + ninja.id}
          className={styles.single}
          key={ninja.id}
        >
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
