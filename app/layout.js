import "./globals.css";
import Nav from "./components/Nav/nav";
export const metadata = {
  title: "Sivas Gürün - Hoşgeldiniz",
  description: "Bu websitesinde, Sivas iline bağlı Gürün'ün doğa harikası mekanlarından olan Gökpınar Gölü ve Şuğul Vadisi gibi pekçok mekanı tarihi ile birlikte keşfedebilirsiniz. Gürün'ün komşu lokasyonlara olan mesafesini öğrenebilirsiniz. Ayrıca, sitemizde Türkiye Süper Lig Fikstürü paylaşıyor, Türkiye'de viral olan, gündeme gelen trend topicleri kaçırmayın diye listeliyoruz. Bölgemizde bulunan yerel yönetimin -Gürün Belediyesi- son yaptığı çalışmaları da sitemizde bulabilirsiniz. İlçemizin 5 günlük hava durumu tahminlerini sayfanın en üstünde gösteriyoruz. Vatandaşlarımızın paylaştığı ikinci el ilanlarını da sitemizde inceleyebilirsiniz.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`google-sans w-full bg-white m-auto`}><Nav />{children}<footer className="text-xl bg-slate-400 text-white font-bold text-center">&copy; TCG</footer></body>
    </html>
  );
}