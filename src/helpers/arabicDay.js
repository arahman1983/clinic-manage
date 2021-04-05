export default function arabicDay(day) {
  switch (day) {
    case "Monday":
      return "الاثنين";
    case "Tuesday":
      return "الثلاثاء";
    case "Wednesday":
      return "الأربعاء";
    case "Thursday":
      return "الخميس";
    case "Friday":
      return "الجمعة";
    case "Saturday":
      return "السبت";
    case "Sunday":
    return "الأحد";
    default:
      return day
  }
}
