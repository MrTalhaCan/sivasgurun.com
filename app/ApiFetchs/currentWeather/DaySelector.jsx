export default function DaySelector({ forecastDays, selectedDayIndex, setSelectedDayIndex }) {

  return (
    <div className="flex justify-between mt-6">

      {forecastDays.slice(0,3).map((day,i)=>(
        <button
          key={i}
          onClick={()=>setSelectedDayIndex(i)}
          className={`p-2 rounded-lg text-center w-full mx-1
          ${selectedDayIndex===i ? "bg-blue-500 text-white" : "bg-cardLight dark:text-blue-800"}
          `}
        >

          <p className={`text-sm ${selectedDayIndex===i ? "text-white" : "dark:text-gray-400"}
          `}>{day.date}</p>
          <p className={`font-bold ${selectedDayIndex===i ? "text-white" : "dark:text-gray-400"}
          `}>{day.avgtemp_c}°C</p>
          <p className={`text-xs ${selectedDayIndex===i ? "text-white" : "dark:text-gray-400"}
          `}>{day.condition.text}</p>

        </button>
      ))}

    </div>
  );
}
