import styles from './userAvatar.module.css'

function UserAvatar({photo, size}) { 
  return(
    <div className={styles.userAvatar} style={{width: size === 'lg' ? '60px' : '40px'}}>
        <img src = {photo} alt =""/>
      </div>
  )
}

export default UserAvatar