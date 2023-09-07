import Container from "../../components/Container";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import checkmark from "../../../public/assets/tick-circle.svg";
import logo from "../../../public/logo.svg";
import styles from "./Login.module.scss";
import { constants, ITM } from "./constant";
const { HEADING, SUB_HEADING, WRITE_UP } = constants;

export const Login = () => {
  const [type, setType] = useState("password");

  const onClick = () => {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    }
  };

  return (
    <>
      <div className={styles.main}>
        <Container>
          <div className={styles.cover}>
            <section className={styles.intro}>
              <Image src={logo} alt="logo" className={styles.logo} />
              <div className={styles.introContainer}>
                <div className={styles.top}>
                  <h1 className={styles.heading}>{HEADING}</h1>
                  <p className={styles.subHeading}>{SUB_HEADING}</p>
                </div>
                <div className={styles.bottom}>
                  {WRITE_UP.map((itm, idx) => {
                    const { id, title, text, src, alt }: ITM = itm;
                    return (
                      <div
                        key={id}
                        className={
                          WRITE_UP.length - 1 === idx
                            ? `${styles.writeUp} ${styles.writeUpalt}`
                            : `${styles.writeUp}`
                        }
                      >
                        <Image src={src} alt={alt} className={styles.img} />
                        <aside className={styles.points}>
                          <div>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.text}>{text}</p>
                          </div>
                          {WRITE_UP.length - 1 === idx && (
                            <Image src={checkmark} alt="checkmark" />
                          )}
                        </aside>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
            <section className={styles.auth}>
              <div className={styles.formContainer}>
                <div className={styles.content}>
                  <div className={styles.formHeading}>
                    <p className={styles.formHeader}>Login to your dashboard</p>
                    <p className={styles.formSub}>
                      Provide details to login to your account
                    </p>
                  </div>
                  <form className={styles.form}>
                    <Input
                      type="text"
                      label="Email"
                      id="email"
                      placeHolder="email"
                    />
                    <Input
                      type={type}
                      label="Password"
                      id="password"
                      placeHolder="password"
                      onClick={onClick}
                      icon
                    />
                    <Button label="Login" className={styles.btn}/>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};
