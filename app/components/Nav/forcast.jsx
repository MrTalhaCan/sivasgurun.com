import Image from 'next/image'
export default function Forcast(){
    return(
        <div className="relative w-[288px] m-auto">
		<div className="h-fit absolute -rotate-90 -translate-x-6 translate-y-6 bg-slate-950/50 text-slate-50 px-4 py-1 font-bold">Gürün</div>
		 <Image
  	 	     src="https://www.mgm.gov.tr/sunum/tahmin-show-1.aspx?m=GURUN&basla=1&bitir=5&rC=111&rZ=fff"
   		     width={256}
    		    height={256}
    		    className="float-right"
			alt="gurun-5-gunluk-hava-durumu"
      		/>
	</div>
    )
}