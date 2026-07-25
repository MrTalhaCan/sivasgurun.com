'use client'
import { useState } from "react";
export default function SecondHandClient(prms){
    const [faqCount, setFaqCount] = useState(6);
    const items = prms.items;
    function countHandler(plus){
        setFaqCount(val => { if(val <= items.length){ return val + plus}else{ return val }})
    }
    const letgo =   'https://www.letgo.com';
    return (
        <>
        {items.map((prod, i) => <div className="w-full p-3 sm:w-1/3 md:w-1/4 xl:w-1/3" style={ {display: i<faqCount ? 'block' : 'none'}} key={i}>
            <a href={`${letgo}${prod.prodLink}`} target="_blank">
                <div className="flex flex-col gap-2">
                    <div className="w-full h-80"><img className="w-full object-contain sm:object-cover h-full" src={prod.prodImg} alt={prod.prodTitle} /></div>
                    <div className="w-full flex flex-col h-24 justify-between">
                        <div className="text-center font-bold">{prod.prodPrice}</div>
                        <div className="text-center line-clamp-2 dark:text-white">{prod.prodTitle}</div>
                        <div className="w-full flex justify-around text-slate-400 text-sm">
                            <div className="">{prod.prodLocation}</div>
                            <div className="">{prod.prodDate}</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>)}
        { faqCount < items.length && <button className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-2xl p-2 rounded mx-auto my-3 text-titleLight" onClick={() => countHandler(Number(3))}>Daha Fazla</button> }
        </>
    )
}