'use client'
import Forcast from "./forcast"
import { useState, useEffect } from "react"
import Link from "next/link";
export default function Nav(){
    const [timeNow, setNowTime] =   useState('');
      useEffect(() => {
        setNowTime(new Intl.DateTimeFormat('tr-TR', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Europe/Istanbul',
          }).format(new Date))
      })
      const nowFunc = () => {
        setNowTime(new Intl.DateTimeFormat('tr-TR', {
              dateStyle: 'full',
              timeStyle: 'short',
              timeZone: 'Europe/Istanbul',
            }).format(new Date))
      }
      setInterval(nowFunc, 1000)
    return(
        <section className="w-full z-10 relative">
            <nav className="h-64 sm:h-24 w-full">
                <div className="h-full w-full p-3 flex flex-wrap justify-around items-between sm:flex-row sm:items-center sm:justify-between sm:items-center">
                    <div className="h-fit w-fit sm:order-1">
                        <div className="w-fit"><Link href="/"><img src="/new-logo.svg" alt="logo" /></Link></div>
                    </div>
                    <div className="h-fit md:w-fit text-center order-3 sm:order-2"><span className="text-white bg-slate-950/50 p-3 rounded-lg font-bold">{timeNow}</span>
                    </div>
                    <div className="h-fit w-fit md:w-fit order-2 sm:order-3"><Forcast /></div>
                </div>
            </nav>
        </section>
    )
}