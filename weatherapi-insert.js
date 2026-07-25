import axios from "axios";
import { Pool } from "./app/ApiFetchs/pool.js"; // kendi Pool.js dosyanı buraya yaz

const locations = [
    { id: 1, lat: 38.752364, lon: 37.017669 }, // Gürün örneği
    { id: 2, lat: 39.123456, lon: 36.987654 }, // Başka bir lokasyon
];

const API_KEY = "5db4ace66d1a43d48e2164327252604";

function formatDate(dateStr) {
  let [year, month, day] = dateStr.split("-");
  switch(month) {
  case "01":
    month="Ocak";
    break;
  case "02":
    month="Şubat";
    break;
	case "03":
    month="Mart";
    break;
	case "04":
    month="Nisan";
    break;
	case "05":
    month="Mayıs";
    break;
	case "06":
    month="Haziran";
    break;
	case "07":
    month="Temmuz";
    break;
	case "08":
    month="Ağustos";
    break;
	case "09":
    month="Eylül";
    break;
	case "10":
    month="Ekim";
    break;
	case "11":
    month="Kasım";
    break;
	case "12":
    month="Aralık";
    break;
  default:
    month=month;
}

  return `${day} ${month} ${year}`;
}

async function getWeatherData(lat, lon, retries = 2) {
  const query = `${lat},${lon}`;
  let attempt = 0;

  while (attempt <= retries) {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
        params: {
          key: API_KEY,
          q: query,
          days: 3,
          lang: "tr",
          alerts: "yes",
        }
      });

      const data = response.data;
      const hourlySelected = [{}, {}, {}];
		for (let d = 0; d < data.forecast.forecastday.length; d++){
			let dayDate	=	formatDate(data.forecast.forecastday[d].hour[0].time.split(" ")[0]);
			hourlySelected[d].day = dayDate;
			hourlySelected[d].hourlyInfs = [];
			 for(let i = 0; i < data.forecast.forecastday[d].hour.length; i++) {
			hourlySelected[d].hourlyInfs[i] = {
			  time: i < 10 ? `0${i}` : `${i}`,
			  temp_c: data.forecast.forecastday[d].hour[i].temp_c,
			  feelslike_c: data.forecast.forecastday[d].hour[i].feelslike_c,
			  condition: data.forecast.forecastday[d].hour[i].condition,
			  humidity: data.forecast.forecastday[d].hour[i].humidity,
			  wind_kph: data.forecast.forecastday[d].hour[i].wind_kph,
			  wind_degree: data.forecast.forecastday[d].hour[i].wind_kph,
			};
		  }
		}

      const selectedData = {
        current: {
          temp_c: data.current.temp_c,
          feelslike_c: data.current.feelslike_c,
          condition: {
            text: data.current.condition.text,
            icon: data.current.condition.icon,
            code: data.current.condition.code,
          },
          wind_kph: data.current.wind_kph,
          wind_degree: data.current.wind_degree,
          humidity: data.current.humidity,
        },
        hourlyForcast: hourlySelected,
        forecast: {
          forecastday: data.forecast.forecastday.map((day) => {
            const formattedDate = formatDate(day.date);
            return {
              date: formattedDate,
              maxtemp_c: day.day.maxtemp_c,
              mintemp_c: day.day.mintemp_c,
              avgtemp_c: day.day.avgtemp_c,
              daily_chance_of_rain: day.day.daily_chance_of_rain,
              condition: {
                text: day.day.condition.text,
                icon: day.day.condition.icon,
                code: day.day.condition.code,
              },
            };
          }),
        },
        alerts: {
          alert: data.alerts?.alert || [],
        },
      };

      return selectedData;

    } catch (error) {
      console.error(`Hava durumu verisi alınamadı (deneme ${attempt + 1}):`, error.message);
      attempt++;

      if (attempt > retries) {
        console.error("Tüm denemeler başarısız oldu.");
        return null;
      }

      // Bekleme süresi (örneğin 1 saniye) — gereksiz API yükünü önlemek için
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}

async function insertWeatherForecast() {
    try {
        const sql = `select * from yazilar WHERE subregion='köy' AND (lat IS NOT NULL AND LNG IS NOT NULL)`;
        const [rows] = await Pool.query(sql);

        for (const location of rows) {
            const { idyazilar, lat, lng } = location;
            const weatherData = await getWeatherData(lat, lng);
            const weatherDataJson = weatherData ? JSON.stringify(weatherData) : null;

            const insertSQL = `
                INSERT INTO havadurumu (idyazilar, forecast)
                VALUES (?, ?)
            `;
            await Pool.query(insertSQL, [idyazilar, weatherDataJson]);
            console.log(`weather data inserted for yazilar ID ${idyazilar}`);
			await new Promise(res => setTimeout(res, 1500));
        }

    } catch (error) {
        console.error("Weather API insert Error:", error);
    } finally {
        await Pool.end(); // bağlantıyı düzgün kapat
    }
}

insertWeatherForecast().then(() => {
  console.log("Hava durumu verileri başarıyla işlendi.");
  process.exit(0);
}).catch(err => {
  console.error("Beklenmeyen hata:", err);
  process.exit(1);
});
