import styles from './book.module.css'
import moment from 'moment';
import {useEffect, useState} from 'react'
import DatePicker from "react-datepicker";
import {nextAvailableDays} from '../../../helpers'

import "react-datepicker/dist/react-datepicker.css";


function BookComponent () {
  const [inDate, setDate] = useState(new Date())
  const availableDays = [0,2]
  const handleDateChange = (date) => {
    setDate(nextAvailableDays(date, availableDays))
  }

  useEffect(() => {
    setDate(nextAvailableDays(new Date, availableDays))
  }, [])
  
  return(
    <>
    <DatePicker
      selected={inDate}
      onChange={handleDateChange}
      dateFormat="dd MMMM yyyy"
      closeOnScroll
      minDate={new Date()}
      strictParsing
    />
    </>
  )
}

export default BookComponent