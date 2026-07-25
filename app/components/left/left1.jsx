'use client'
import Link from 'next/link'
import { useEffect, useState } from "react"
import Image from 'next/image'
export default function Left(){
    const [isDark, setIsDark]   =   useState(false);
    useEffect(() => {
        const clientPref = window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(clientPref)
    })
    let linkIcon = isDark ? 'link-light.png': 'link.png'
    return(
        <div id="left" className="-translate-y-36 max-w-96 w-full mx-auto xl:w-1/4 xl:mx-10 xl:-translate-y-14 relative">
            <div className="xl:sticky xl:top-0">
                <div className="border-4 border-slate-400 rounded-xl h-80 shadow-xl">
                    <div className="bg-slate-400 dark:bg-slate-600/75 dark:xl:bg-slate-600 text-center text-3xl my-2 dark:text-titleDark text-titleLight">Gezilecek Yerler</div>
                    <ul className="text-textLight dark:text-textDark">
                    <Link href="/gezilecekyerler/gurun/sugul-vadisi/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1">
<Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Şuğul Vadisi link icon"
      />
Şuğul Vadisi</li></Link>
                    <Link href="/gezilecekyerler/gurun/gokpinar-golu/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gökpınar Gölü link icon"
      />Gökpınar Gölü</li></Link>
                    </ul>
                </div>
                <div className="border-4 border-slate-400 rounded-xl h-80 mt-12 shadow-xl">
                    <div className="bg-slate-400 dark:bg-slate-600 text-white text-center text-3xl my-2 text-titleLight dark:text-titleDark">Son Yazılar</div>
                    <ul className="text-textLight dark:text-textDark">
                    <Link href="/mekanlar/gurun/gurun-ulu-cami/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Ulu Cami link icon"
      />Gürün Ulu Cami</li></Link>
                    <Link href="/mekanlar/gurun/gurun-ermeni-kilisesi/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Ermeni Kilisesi link icon"
      />Gürün Ermeni Kilisesi</li></Link>
                    <Link href="/mekanlar/gurun/gurun-sali/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Şalı link icon"
      />Gürün Şalı</li></Link>
                    <Link href="/mekanlar/gurun/gurun-kaya-evleri/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Kaya Evleri link icon"
      />Gürün Kaya Evleri</li></Link>
                    <Link href="/mekanlar/gurun/gurun-meydan-cami/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Meydan Cami link icon"
      />Gürün Meydan Cami</li></Link>
                    <Link href="/mekanlar/gurun/gurun-toraman-cami/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><Image
	className='w-5 -rotate-45'
        src={`/${linkIcon}`}
        width={20}
        height={20}
        alt="Gürün Toraman Cami link icon"
      />Gürün Toraman Cami</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}