import Link from 'next/link'
export default function Left(){
    return(
        <div id="left" className="-translate-y-36 max-w-96 w-full mx-auto xl:w-1/4 xl:mx-10 xl:-translate-y-14 relative">
            <div className="border-4 rounded-xl h-80 shadow-xl xl:sticky xl:top-0">
                <div className="bg-slate-950/25 text-white text-center text-3xl my-2">Gezilecek Yerler</div>
                <ul className="">
                <Link href="/gezilecekyerler/sugul-vadisi/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><img className='w-5 -rotate-45' src="/link.png" alt="link" />Şuğul Vadisi</li></Link>
                <Link href="/gezilecekyerler/gokpinar-golu/"><li className="text-xl text-center pt-3 flex flex-row items-center justify-center gap-1"><img className='w-5 -rotate-45' src="/link.png" alt="link" />Gökpınar Gölü</li></Link>
                </ul>
            </div>
        </div>
    )
}