import styles from './header.module.css';
import {useTranslation} from 'i18next'

function Header () {
  const {t} = useTranslation()
  return(
    <div className={`row ${styles.headerContainer}`}>
      {
        t('siteName')
      }
    </div>
  )
}

export default Header