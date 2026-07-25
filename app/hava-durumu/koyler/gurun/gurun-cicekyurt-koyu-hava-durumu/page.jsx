import { Pool } from "@/app/ApiFetchs/pool";
import WeatherMainPanel from "@/app/ApiFetchs/currentWeather/currentWthCompnnt";
import {weatherData} from "./../wthrApiBridge"
import Image from 'next/image';
export const metadata = {
  title: "Sivas Gürün - Çiçekyurt Köyü Hava Durumu",
  description: "Çiçekyurt köyünün güncel hava durumu ve 3 günlük hava tahmin raporu. Anlık sıcaklık, hissedilen sıcaklık, yağmur olasılığı ve rüzgar bilgileriyle doğru ve hızlı hava durumu verilerine ulaşın.",
openGraph: {
    title: "Sivas Gürün - Çiçekyurt Köyü Hava Durumu",
    description:
      "Gürün Çiçekyurt köyünün güncel hava durumu ve 3 günlük hava tahmin raporu.",
    url: "https://sivasgurun.com/hava-durumu/koyler/gurun/gurun-cicekyurt-koyu-hava-durumu",
    siteName: "sivasgurun.com",
    images: [
      {
        url: "https://sivasgurun.com/hava-durumu.webp",
        width: 1280,
        height: 720,
        alt: "Gürün Çiçekyurt Köyü Hava Durumu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};
export default async function HavaDurumu(){
const reslt = await weatherData(26);
    return(
       <div className="max-w-md mx-auto my-20 p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-800 tracking-wide ring-2">
  <div className="text-center">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Çiçekyurt Köyü Hava Durumu</h1>
      <WeatherMainPanel forecastData={reslt.forecast} />
  </div>
</div>
    )
}
// Sayfanın 43200 saniye (12 saat) cache'lenmesini sağla
export const revalidate = 43200;
