import GurunBel from "@/app/ApiFetchs/gurunBel"
import SecondHand from "@/app/ApiFetchs/secondHand"
import FAQ from "./faq"
export default function Mid(){
    return(
        <div id="mid" className="xl:w-1/2 xl:-translate-y-36">
            <div className="h-80 border-4 rouded bg-slate-500/50 flex justify-center items-center text-white text-5xl">Reklam Alanı</div>
            <div className="h-96 border-4 rouded mt-20 min-w-2xl mx-auto w-full md:w-4/5 xl:w-full relative"><div className="absolute top-0 w-full -translate-y-8 text-3xl z-10"><h2 className="bg-slate-500 m-auto w-fit p-2 rounded-md text-white text-center">Gürün Belediye Haberleri</h2></div><GurunBel /></div>
            <div className="mt-20 w-full border-dashed border-4"><h2 className="text-3xl w-fit bg-slate-500 text-white m-auto p-2 -translate-y-6 rounded-md">İkinci El İlanları</h2><SecondHand /></div>
            <div className="mt-20 border-4">
                <h1 className="text-3xl text-white -translate-y-6 bg-slate-500 rounded-lg w-fit m-auto p-2">Gürün&lsquo;ün Komşu İl/İlçelere Mesafesi</h1>
                <FAQ />
            </div>
        </div>
    )
}