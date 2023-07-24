
function CalendarLink({img, text}) {
  return (
    <div className="bg-color-grey-800 py-3 flex flex-col justify-center items-center gap-3 w-1/3 rounded-md lg:w-2/5 lg:p-10 ">
      <div className="calendarlink-img mx-auto">
        <img src={img} alt="calendar-image" className="md:w-16 lg:w-20" />
      </div>
      <p className="calendar-para font-semibold text-white text-sm md:text-lg lg:text-xl">{text}</p>
    </div>
  )
}

export default CalendarLink
