
import TrendsCard from "./trendsCard"
import { FootballSuperLeague } from "@/app/ApiFetchs/footballFetch"
export default async function Right(){
    return(

        <div id="right" className="max-w-96 w-full mx-auto my-12 xl:my-0 xl:w-1/4 xl:mx-10 xl:-translate-y-14 relative">
          <div className="xl:sticky xl:top-0">
            <div className="rounded-xl border-4 border-slate-400 h-80 shadow-xl">
              <div className="text-center my-2">
                <div className="bg-slate-400 dark:bg-slate-600 text-3xl my-2 text-titleLight dark:text-titleDark">Futbol Süper Lig</div>
                <FootballSuperLeague />
              </div>
            </div>
            <div className="rounded-xl border-4 border-slate-400 h-fit min-h-80 mt-12 shadow-xl">
              <div className="text-center">
                <div className="bg-slate-400 dark:bg-slate-600 text-3xl my-2 text-titleLight dark:text-titleDark">Trendler</div>
                <TrendsCard />
              </div>
            </div>
          </div>
        </div>
	
    )
}
