import styles from './footer.module.css';
import { useTranslation } from 'react-i18next';

function Footer(){
  const {t} = useTranslation()
  return(
    <div className={styles.footer}>
      {t('footer')}
    </div>
  )
}

export default Footer