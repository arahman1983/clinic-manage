import { useTranslation } from 'react-i18next';
import Header from './header/header'
import Footer from './footer/footer'
import styles from "./layout.module.css"
import { MenuItem } from "../../components";

function Layout ({children}){
  const {t} = useTranslation()
  return(
    <>
      <Header />
        <div className={styles.bodyContainer}>
          <div className={styles.menuContainer}>
            <MenuItem title={t('routing.clinics')} path="/" />
            <MenuItem title={t('routing.appointments')} path="/appointments" />
            <MenuItem title={t('routing.members')} path="/members" />
            <MenuItem title={t('routing.patients')} path="/patients" />            
          </div>
          <div className={styles.pageContainer}>
            {children}
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Layout