"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Forcast from "./forcast";

export default function Nav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobile, setMobile] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});
  const menuRef = useRef(null);

  // Scroll Takibi
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      // Mobilde menü açıkken scroll takibiyle nav'ı gizleme (çakışmayı önlemek için)
      if (mobile) return; 

      if (current > lastScroll && current > 120) {
        setShowNav(false);
        setOpenSubMenus({});
      } else {
        setShowNav(true);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, mobile]);

  // Dışarı tıklayınca menüleri kapatma
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenSubMenus({});
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSubMenu = (menuKey) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  // Menüyü güvenli kapatma fonksiyonu
  const closeAllMenus = () => {
    setMobile(false);
    setOpenSubMenus({});
  };

  const menuItems = [
    {
      title: "Gezilecek Yerler",
      sub: [
        { name: "Sivas", href: "/gezilecekyerler/sivas" },
        { name: "Gürün", href: "/gezilecekyerler/gurun" },
      ],
    },
    {
      title: "Mekanlar",
      sub: [{ name: "Gürün Mekanları", href: "/mekanlar/gurun" }],
    },
	{
      title: "Rehberler",
      sub: [{ name: "Yemek Rehberi", href: "/rehberler/yemek-rehberi" }],
    },

    {
      title: "Köyler",
      sub: [{ name: "Gürün Köyleri", href: "/koyler/gurun" }],
    },
    {
      title: "Hava Durumu",
      sub: [{ name: "Gürün Köyleri", href: "/hava-durumu/koyler/gurun" }],
    },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -120 }}
      transition={{ duration: 0.25 }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
        {/* Logo */}
        <Link href="/" onClick={closeAllMenus} className="flex items-center gap-2 shrink-0">
          <Image src="/new-logo.svg" width={150} height={107} alt="Sivas Gürün" priority />
        </Link>

        {/* Masaüstü Menü */}
        <ul className="hidden xl:flex gap-8 font-semibold relative" ref={menuRef}>
          {menuItems.map((item) => (
            <li key={item.title} className="relative group">
              <button
                onClick={() => toggleSubMenu(item.title)}
                className="flex items-center gap-1 hover:text-blue-500 transition-colors"
              >
                {item.title} <span className="text-[10px]">{openSubMenus[item.title] ? "▲" : "▼"}</span>
              </button>

              <AnimatePresence>
                {openSubMenus[item.title] && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-xl overflow-hidden"
                  >
                    {item.sub.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          onClick={closeAllMenus}
                          className="block px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm border-b border-slate-100 dark:border-slate-700 last:border-0"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
                    <li><Link href="/iletisim" onClick={closeAllMenus} className="hover:text-blue-500">İletişim</Link></li>
        </ul>

        {/* Masaüstü Hava Durumu */}
        <div className="hidden xl:block shrink-0">
          <Forcast />
        </div>

        {/* Mobil Menü Butonu */}
        <button onClick={() => setMobile(!mobile)} className="xl:hidden text-3xl p-2">
          {mobile ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-slate-800 text-white border-t border-slate-700 overflow-hidden"
          >
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.title} className="border-b border-slate-700 last:border-0 pb-2">
                  <button
                    onClick={() => toggleSubMenu(`mob-${item.title}`)}
                    className="w-full flex justify-between items-center py-3 font-bold text-lg"
                  >
                    {item.title} <span>{openSubMenus[`mob-${item.title}`] ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence>
                    {openSubMenus[`mob-${item.title}`] && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 bg-slate-900/50 rounded-lg overflow-hidden"
                      >
                        {item.sub.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              // Önemli: Linke tıklanınca navigasyonu kesmemesi için state'i kapatıyoruz
                              onClick={closeAllMenus}
                              className="block py-3 px-2 text-slate-300 active:text-white"
                            >
                              • {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
              
              <li>
                <Link href="/iletisim" onClick={closeAllMenus} className="block py-3 font-bold border-b border-slate-700">
                  İletişim
                </Link>
              </li>
              <div className="mt-4 pt-4">
                <Forcast />
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}