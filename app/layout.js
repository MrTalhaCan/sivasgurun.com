import "./globals.css";
import LayoutInner from './components/Layout/layoutInner.jsx'
export const metadata = {
  title: "Sivas Gürün - Hoşgeldiniz",
  description: "Bu websitesinde, Sivas iline bağlı Gürün'ün doğa harikası mekanlarından olan Gökpınar Gölü ve Şuğul Vadisi gibi pekçok mekanı tarihi ile birlikte keşfedebilirsiniz. Gürün'ün komşu lokasyonlara olan mesafesini öğrenebilirsiniz. Ayrıca, sitemizde Türkiye Süper Lig Fikstürü paylaşıyor, Türkiye'de viral olan, gündeme gelen trend topicleri kaçırmayın diye listeliyoruz. Bölgemizde bulunan yerel yönetimin -Gürün Belediyesi- son yaptığı çalışmaları da sitemizde bulabilirsiniz. İlçemizin 5 günlük hava durumu tahminlerini sayfanın en üstünde gösteriyoruz. Vatandaşlarımızın paylaştığı ikinci el ilanlarını da sitemizde inceleyebilirsiniz.",
  verification: {
    yandex: '56158be4c0601c42',   
  },
};
export default function RootLayout({children}) {
  return (
    <LayoutInner>{children}</LayoutInner>
  );
}