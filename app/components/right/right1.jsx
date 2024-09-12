import { FootballSuperLeague } from "@/app/ApiFetchs/footballFetch"
import Trends from "@/app/ApiFetchs/trends"
export default function Right(){
    return(
        <div id="right" className="max-w-96 w-full mx-auto my-12 xl:my-0 xl:w-1/4 xl:mx-10 xl:-translate-y-14 relative">
            <div className="rounded-xl border-4 h-80 shadow-xl xl:sticky xl:top-0">
              <div className="text-center my-2">
                <div className="bg-slate-950/25 text-3xl my-2 text-white">Süper Lig Puan</div>
                <FootballSuperLeague />
              </div>
            </div>
            <div className="rounded-xl border-4 h-80 mt-12 shadow-xl xl:sticky xl:top-96">
              <div className="text-center ">
                <div className="bg-slate-950/25 text-3xl my-2 text-white">Trendler</div>
                <Trends />
              </div>
            </div>
        </div>
    )
}