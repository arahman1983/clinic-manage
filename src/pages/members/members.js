import styles from './members.module.css'
import {useState, useEffect} from 'react'
import {FiGrid, FiList} from 'react-icons/fi'
import {MembersCard, MembersRow} from '../../components'
import {useSelector, useDispatch} from 'react-redux'
import {setMember} from '../../redux/actions/membersAction'
import membersSD from '../../staticData/memners.json'

function Members () {
  const [showGrid, setShowGrid] = useState(true)
  const dispatch = useDispatch()
  const members = useSelector(state => state.members)

  useEffect(() => {
    dispatch(setMember(membersSD))
  }, [])

  const handleGrid = () => {
    setShowGrid(true)
  }

  const handleMenu = () => {
    setShowGrid(false)
  }


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
          <button className="btn btn-link" disabled={showGrid} onClick={handleGrid}>
            <FiGrid width={30}/>
          </button>
          <button className="btn btn-link" disabled={!showGrid} onClick={handleMenu}>
            <FiList width={36} />
          </button>
        </div>
      </div>
      <div className={`row ${styles.members}`}>
          {  
            members &&
            members.map((m,i) => (
              showGrid 
              ?(
              <div className="col-md-3 col-sm-6" key={i}>
                  <MembersCard c_id={m.c_id} pic={m.image} name={m.en_name} appointments={m.appointments}/>
              </div>)
              : (
                <div className="col-12" key={i}>
                  <MembersRow c_id={m.c_id} pic={m.image} name={m.en_name} appointments={m.appointments} />
                </div>
              )
            ))
          }
          
      </div>
    </div>
  )
}

export default Members