import React from "react";
import styles from "./Container.module.scss";

interface Children {
  children: React.ReactNode;
  alt?: boolean;
}

export const Container = ({ children, alt }: Children) => {
  return (
    <div
      className={
        alt
          ? `${styles.container} ${styles.containerAlt}`
          : `${styles.container}`
      }
    >
      {children}
    </div>
  );
};
