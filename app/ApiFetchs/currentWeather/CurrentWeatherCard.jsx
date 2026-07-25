'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CurrentWeatherCard({ hourlyData, day }) {
  const icnConv = (imgData) => {
   let absIcn = imgData?.split("/");
   absIcn = absIcn.slice(-2);
    absIcn[1] = `${absIcn[1].split('.')[0]}.webp`;
   return `/hava-durumu/${absIcn.join('/')}`;
}
  const [currentHourData, setCurrentHourData] = useState(null); 	
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();
    setCurrentHourData(hourlyData[hour]);
  }, [hourlyData]);

  if (!currentHourData) return null;

  return (
    <div className="flex flex-col items-center mb-6">

      <p className="dark:text-gray-400 text-xl">
        {day.date} {currentHourData.time} : 00
      </p>

      <Image
        src={icnConv(currentHourData.condition.icon)}
        width={64}
        height={64}
        alt=""
      />
	<p className="text-gray-600 dark:text-gray-400">
        {currentHourData.condition.text}
      </p>

      <p className="text-4xl font-bold text-blue-500">
        {currentHourData.temp_c}°C
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Hissedilen: {currentHourData.feelslike_c}°C
      </p>

    </div>
  );
}
