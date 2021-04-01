import styles from './userCard.module.css'
import {avatarDef} from '../../../utilities/'
import {UserAvatar} from '../../index'
import {useTranslation} from 'react-i18next'

function UserCard (){
  const {t} = useTranslation()
  return(
    <div className={styles.userData}>
      <UserAvatar photo={avatarDef} size="lg" />
      <div className={styles.userTitle}>
        <b className='d-block'>User Name</b>
        <span className='d-block'>User Role</span>
        <button className={`btn btn-link d-block p-0 ${styles.userProfile}`}>
          {t('profileLink')}
        </button>
      </div>
    </div>
  )
}

export default UserCard