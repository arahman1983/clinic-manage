// import styles from './clinics.module.css'
import {useEffect} from 'react'
import { ClinicCard } from "../../components";
import clinicsData from '../../staticData/clinics.json'
import {useSelector, useDispatch} from 'react-redux'
import {setClinic} from '../../redux/actions/clinicAction'

function Clinics (){
  const clinics = useSelector(state => state.clinics)
  const isEnglish = useSelector(state => state.lang)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setClinic(clinicsData))    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return(
    <div className="row">
      {
        clinics && clinics.map((c,i) => 
          <div className="col-md-4" key={i}>
            <ClinicCard 
              title = {isEnglish ? c.en_title : c.ar_title} 
              address = {isEnglish ? c.en_address : c.ar_address} 
              pic = {c.image}
              location = {c.location}
              link={{title:'More Data',path:"/"}}
              phonesList={c.phone} 
            />
          </div>
        )
      }
      
    </div>
  )
}

export default Clinics