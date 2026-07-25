import Image from "next/image";
import { useState } from "react";

export default function HourlyScroller({ hourlyData, selectedDayIndex }) {
const icnConv = (imgData) => {
   let absIcn = imgData?.split("/");
   absIcn = absIcn.slice(-2);
   absIcn[1] = `${absIcn[1].split('.')[0]}.webp`;
   return `/hava-durumu/${absIcn.join('/')}`;
}
let filteredHours = hourlyData;

if (selectedDayIndex === 0) {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" }));
  const currentHour = now.getHours();
  filteredHours = hourlyData.slice(currentHour);
}

  return (
  <div className="flex gap-3 overflow-x-auto pb-2">

    {filteredHours.map((h, i) => {
      const myIcon = icnConv(h.condition.icon);

      return (
        <div key={i} className="min-w-[80px] bg-cardLight dark:bg-cardDark border rounded-lg p-2 text-center">

          <p className="text-sm dark:text-gray-400">
            {selectedDayIndex === 0 && i === 0 ? "Şimdi" : `${h.time} : 00`}
          </p>

          <Image className="m-auto" src={myIcon} width={32} height={32} alt="" />

          <p className="font-semibold dark:text-gray-400">{h.temp_c}°</p>
	{false && (
 	<p className="text-xs text-blue-400">
            %{h.chance_of_rain}
          </p>
	)}
        </div>
      )
    })}

  </div>
);
}
