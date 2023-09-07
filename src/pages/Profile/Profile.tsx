import Container from "../../components/Container";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useGetCompanyInfo } from "../../hooks/useGetCompanyInfo";
import Navigation from "../../components/Navigation";
import Image from "../../components/Image";
import { constants } from "./constants";
import { cele, bling, boom, notification, soon, loading2 } from "./constants";
import styles from "./Profile.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const { NOTIFICATIONS } = constants;

export const Profile = () => {
  const nav = useNavigate();
  const { error, loading, data } = useGetCompanyInfo();
  const { user, setUser } = useContext(UserContext);
  const name = data?.company.name;
  const ceo = data?.company.ceo;
  const cto = data?.company.cto;

  console.log(user);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setUser({ ...user, authenticated: false });
        nav("/");
      }, 2000);
    }
  }, [nav, loading, setUser, user]);

  if (error) {
    return <p className={styles.loadingState}>Error</p>;
  }

  return (
    <>
      <Navigation alt />
      {loading ? (
        <div className={styles.loadingState}>
          <Image src={loading2} alt="loading" />
        </div>
      ) : (
        <Container alt>
          <section className={styles.section}>
            <div className={styles.top}>
              <div className={styles.companyName}>
                <p className={styles.ini}>{name[0] + name[1]}</p>
                <p className={styles.companyname}>{name}</p>
              </div>
              <div className={styles.companyDetails}>
                <div className={styles.co}>
                  <p className={styles.label}>CEO</p>
                  <p className={styles.name}>{ceo}</p>
                </div>
                <div className={styles.co}>
                  <p className={styles.label}>CTO</p>
                  <p className={styles.name}>{cto}</p>
                </div>
              </div>
            </div>

            <div className={styles.bottom}>
              <Image src={soon} alt="coming soon" className={styles.soon} />
              <div className={styles.others}>
                <Image src={cele} alt="celebrate" />
                <Image src={bling} alt="bling" />
                <Image src={boom} alt="boom" />
              </div>
              <div className={styles.notify}>
                <Image src={notification} alt="notification" />
                <p className={styles.notification}>{NOTIFICATIONS}</p>
              </div>
            </div>
          </section>
        </Container>
      )}
    </>
  );
};
