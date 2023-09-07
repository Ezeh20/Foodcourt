import Container from "../../components/Container";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import checkmark from "../../../public/assets/tick-circle.svg";
import logo from "../../../public/logo.svg";
import styles from "./Login.module.scss";
import { constants, ITM } from "./constant";
import { useNavigate } from "react-router-dom";
const { HEADING, SUB_HEADING, WRITE_UP, LOGIN_HEADER, LOGIN_SUB } = constants;

export const Login = () => {
  const [type, setType] = useState("password");
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const { email, password } = user;
  const nav = useNavigate();

  const mockEmail = "Cokitchen222@gmail.com";
  const mockPassword = "12345678";

  //toggle the password visibility
  const onClick = () => {
    if (type === "password") {
      setType("text");
    } else if (type === "text") {
      setType("password");
    }
  };

  //setEmail
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
  };

  //setPassword
  const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
  };

  //authenticate the email and password if vaild redirect to the details page
  const onSubmit = () => {
    if (email === mockEmail && password === mockPassword) {
      setUser({ ...user, authenticated: true });
      setLoading((prev) => !prev);
      setTimeout(() => {
        nav("/profile");
      }, 2000);
    } else {
      alert("invalid email or password");
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
                    <p className={styles.formHeader}>{LOGIN_HEADER}</p>
                    <p className={styles.formSub}>{LOGIN_SUB}</p>
                  </div>
                  <form className={styles.form}>
                    <Input
                      type="text"
                      label="Email"
                      id="email"
                      placeHolder="email"
                      onChange={(e) => onChange(e)}
                    />
                    <Input
                      type={type}
                      label="Password"
                      id="password"
                      placeHolder="password"
                      onClick={onClick}
                      onChange={(e) => {
                        passwordOnChange(e);
                      }}
                      icon
                    />
                    <Button
                      label={loading ? "Loading...." : "Login"}
                      type="button"
                      className={styles.btn}
                      onClick={onSubmit}
                    />
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
