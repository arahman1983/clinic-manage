import styles from './clinic.module.css'
import {Link} from 'react-router-dom'
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useTranslation } from 'react-i18next';
import { useState } from 'react'

function ClinicCard ({title, address, pic, link, location, phonesList }){
  const {t} = useTranslation()
  const [showPhone, setShowPhone] = useState(false)
  const handlePhones = () => setShowPhone(!showPhone)
  return(
    <div className={`card ${styles.clinicCard}`}>
        <div className="card-body">
          <div className="w-100">
            <img src={pic} className="w-100" alt="" />
          </div>
          <h4 className="my-3">{title}</h4>
          <p>{address}</p>
          <div className={styles.footer}>
            <a href={location} 
                className="btn btnDanger" 
                target="_blank" 
                rel="noreferrer"
                title="Location"
                >
              <FiMapPin/>
            </a>
            <Link to={link.path} className={`btn btnPrimary w-50`}>
              {t('clinics.details')}
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
                      phonesList.map( (p,i) =>
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

export default ClinicCard