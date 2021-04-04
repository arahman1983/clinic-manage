import styles from './members.module.css'
import {useState} from 'react'
import {FiGrid} from 'react-icons/fi'

function Members () {
  const [showGrid, setShowGrid] = useState(true)



  return(
    <div className="w-100">
      <div className={`row ${styles.filter}`}>
        <div className="col-md-5">
          df
        </div>
        <div className="col-md-5">
          df
        </div>
        <div className="col-md-2 d-flex justify-content-end">
          <FiGrid />
        </div>
      </div>
      <div className={styles.members}>
        df
      </div>
    </div>
  )
}

export default Members