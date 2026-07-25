'use client'
import Link from "next/link";
import Nav from "./../Nav/nav.jsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";   // ← EKLE

export default function LayoutInner({ children }) {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();                 // ← EKLE

  useEffect(() => {
    const clientPref = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(clientPref);
  });

  const isHomePage = pathname === "/";            // ← EKLE

  return (
    <html className={isDark ? "dark" : ''} lang="tr">
      <body
        className={`google-sans w-full bg-white dark:bg-slate-900 m-auto ${
          isHomePage ? "mt-0" : "mt-[200px]"      // ← DEĞİŞTİR
        }`}
      >
        <Nav />
        {children}
        <footer className="text-xl bg-slate-400 dark:bg-slate-500 font-bold text-center text-titleLight dark:text-titleDark">
          <div><Link className="block py-2" href="/hakkimizda">Hakkımızda</Link></div>
          <div><Link className="block py-2" href="/gizlilik-politikamiz">Gizlilik Politikamız</Link></div>
          <div><Link className="block py-2" href="/kvkk">KVKK & Kullanım Koşulları</Link></div>
          <div><Link className="block py-2" href="/cerez-politikasi">Çerez Politikası</Link></div>
          <div><Link className="block py-2" href="/iletisim">&#9993; İletişim</Link></div>
          <div className="py-2">&copy; TCG</div>
        </footer>
      </body>
    </html>
  );
}