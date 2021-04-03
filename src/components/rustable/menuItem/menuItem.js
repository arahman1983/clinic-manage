import styles from './menuItems.module.css'
import {NavLink} from 'react-router-dom'

function MenuItem ({path, title}) {
  return(
    <NavLink to={path} 
      className={styles.menuItem} 
      activeClassName={styles.menuItemActive}
      exact
    >
        {title}
    </NavLink>
  )
}

export default MenuItem