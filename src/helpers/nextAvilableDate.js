export default function nextAvailableDays(selectedDate, availableDays){
  let day = selectedDate.getDay()
  let diff ; 
  availableDays.forEach(d => {
    if(d >= day){
      diff = selectedDate.getDate() - day + d - day + 1;
    }else{
      diff = selectedDate.getDate() - day + d + 6 - day + 1;
    }
  })
  // diff = selectedDate.getDate() - day + nextDay - day +1;
  return new Date(selectedDate.setDate(diff));
}