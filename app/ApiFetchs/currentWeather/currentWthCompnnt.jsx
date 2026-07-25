'use client'
import { useState } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import HourlyScroller from "./HourlyScroller";
import DaySelector from "./DaySelector";

export default function WeatherMainPanel({ forecastData }) {
 console.log("forecastData forecastData forecastData forecastData", forecastData)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const selectedDay = forecastData.forecast.forecastday[selectedDayIndex];
  const slctdHrlyData = forecastData.hourlyForcast[selectedDayIndex].hourlyInfs;
  return (
    <div className="bg-cardLight dark:bg-cardDark rounded-xl p-4 shadow">

      <CurrentWeatherCard
        hourlyData={slctdHrlyData}
        day={selectedDay}
      />

      <HourlyScroller hourlyData={slctdHrlyData} selectedDayIndex={selectedDayIndex} />

      <DaySelector
        forecastDays={forecastData.forecast.forecastday}
        selectedDayIndex={selectedDayIndex}
        setSelectedDayIndex={setSelectedDayIndex}
      />

    </div>
  );
}
