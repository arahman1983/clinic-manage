import styles from './header.module.css';
import { useTranslation } from 'react-i18next';
import UserCard from '../userCard/userCard'

function Header () {
  const {t} = useTranslation()
  return(
    <div className={`row ${styles.headerContainer}`}>
      <div className="logo">
        <span>{ t('siteName') }</span>
      </div>
      <UserCard />
    </div>
  )
}

export default Header