import styles from './book.module.css'
import {useState} from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function BookComponent () {
  const [inDate, setDate] = useState(null)
  const availableDays = [0,2]
  const handleDateChange = (date) => {
    setDate(date)
  }

  // useEffect(() => {
  //   setDate(nextAvailableDays(new Date(), availableDays))
  // }, [])
  
  return(
    <>
    <DatePicker
      selected = {inDate}
      onChange = {handleDateChange}
      dateFormat = "dd MMMM yyyy"
      closeOnScroll
      minDate = {new Date()}
      strictParsing
      filterDate = {date => availableDays.includes(date.getDay())}
      placeholderText = "Select Date"
    />
    </>
  )
}

export default BookComponent