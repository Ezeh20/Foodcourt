import Container from "../../components/Container";
// import { useContext } from "react";
// import { UserContext } from "../../context/UserContext";
import Navigation from "../../components/Navigation";
import Image from "../../components/Image";
import { constants } from "./constants";
import { cele, bling, boom, notification, soon } from "./constants";
import styles from "./Profile.module.scss";
const { COMPANY_NAME, CEO_NAME, CTO_NAME, NOTIFICATIONS } = constants;

export const Profile = () => {
  return (
    <>
      <Navigation alt />
      <Container alt>
        <section className={styles.section}>
          <div className={styles.top}>
            <div className={styles.companyName}>
              <p className={styles.ini}>{COMPANY_NAME[0] + COMPANY_NAME[1]}</p>
              <p className={styles.companyname}>{COMPANY_NAME}</p>
            </div>
            <div className={styles.companyDetails}>
              <div className={styles.co}>
                <p className={styles.label}>CEO</p>
                <p className={styles.name}>{CEO_NAME}</p>
              </div>
              <div className={styles.co}>
                <p className={styles.label}>CTO</p>
                <p className={styles.name}>{CTO_NAME}</p>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Image src={soon} alt="coming soon"  className={styles.soon}/>
            <div className={styles.others}>
              <Image src={cele} alt="celebrate" />
              <Image src={bling} alt="bling" />
              <Image src={boom} alt="boom" />
            </div>
            <div className={styles.notify}>
              <Image
                src={notification}
                alt="notification"
              />
              <p className={styles.notification}>{NOTIFICATIONS}</p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};
