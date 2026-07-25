import { getDepremler } from "@/app/ApiFetchs/earthQuakes"; // Veriyi çeken API
// Sayfa her 1 saatte bir (3600 saniye) yeniden oluşturulur
export const revalidate = 3600;

export const metadata = {
  title: "Sivas Gürün - Son Depremler",
  description: "Sivas'ın Gürün ilçesinde son yaşanan depremleri anlık olarak takip edin. Güncel deprem bilgileri ve son sarsıntılar burada.",
};

export default async function EarthQuakesPage() {
  const erthqks = await getDepremler("gurun"); // Gürün'e ait veriler
  const lastQke = erthqks?.[0];
const lastUpdt = new Intl.DateTimeFormat("tr-TR", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "Europe/Istanbul",
        }).format(new Date())

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-textLight dark:text-textDark mb-6">
        Sivas Gürün Son Depremler
      </h1>

      <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-10">
        Son güncelleme: {lastUpdt}
      </p>

      <ul className="space-y-4">
        {erthqks.map((quake, index) => (
          <li
            key={quake.quakeid || index}
            className={`p-4 rounded-md border ${
              index === 0
                ? "bg-red-100 dark:bg-red-900 border-red-400"
                : "bg-white dark:bg-slate-800 border-gray-300 dark:border-gray-700"
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-textLight dark:text-textDark">
                  {quake.loc || "Gürün"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Intl.DateTimeFormat("tr-TR", {
            dateStyle: "full",
            timeStyle: "short",
        }).format(new Date(`${quake.quakedate}`))}
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-red-600 dark:text-red-400">
                  {quake.mag} Mw
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
