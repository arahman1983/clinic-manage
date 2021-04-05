import styles from './membersCard.module.css'
import avatar from '../../../utilities/images/avatar.jpg'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {FiPhoneCall, FiMapPin} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { arabicDay } from '../../../helpers'

function MembersCard({c_id, pic, name, appointments}) {
  const clinic = useSelector(state => state.clinics.find(c => c.id === c_id))
  const isEnglish = useSelector(state => state.lang)
  const [showPhone, setShowPhone] = useState(false)
  const handlePhones = () => setShowPhone(!showPhone)
  const {t} = useTranslation()
  
  return(
    <div className={`card ${styles.gridCard}`}>
        <div className="card-body">
        <div className="w-100">
            <img src={pic ? pic : avatar} className="w-100" alt="" />
        </div>
        <b className={styles.cardTitle}>{name}</b>
        <p>
          {
            appointments && appointments.map((p,i) => 
                <span key={i}>
                  <b>{isEnglish ? p.day : arabicDay(p.day)} </b>
                  <span>{`${p.from} - ${p.to}`}</span><br/>
                </span>
            )
          }
        </p>
        <div className={styles.footer}>
            <a href={clinic.location} 
                className="btn btnDanger" 
                target="_blank" 
                rel="noreferrer"
                title="Location"
                >
              <FiMapPin/>
            </a>
            <Link to='/members' className={`btn btnPrimary w-50`}>
              {t('clinics.book')}
            </Link>
            <div class="btn-group" role="group">
              <button 
                className={showPhone ? "btn btnSuccessActive" : "btn btnSuccess"}
                onClick={handlePhones}
                >
                <FiPhoneCall/>
              </button>
              {
                showPhone && 
                  <ul className={styles.phonesList}>
                    {
                      clinic.phone && clinic.phone.map( (p,i) =>
                        <li><a className="dropdown-item" key={i} href={`tel:${p}`}>{p}</a></li>
                      )
                    }
                  </ul>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default MembersCard