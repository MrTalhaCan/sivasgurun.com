import FetchSchlPosts from "@/app/ApiFetchs/schoolposts"
import Posts from "@/app/ApiFetchs/posts"
import FAQ from "./faq"
export default function Mid(){
    return(
        <div id="mid" className="xl:w-1/2 xl:-translate-y-36">
            {/* <div className="h-80 border-4 border-slate-400 rouded bg-slate-400/50 dark:bg-slate-600/50 flex justify-center items-center text-5xl text-titleLight dark:text-titleDark text-center"><a href='mailto:comsivasgurun@gmail.com?subject=Reklam%20Alanı'>Reklam Alanı<div className='text-base'>&#9993;İletişime geçmek için tıkla!</div></a></div> */} {/* <div className="h-96 border-4 border-slate-400 rouded mt-20 min-w-2xl mx-auto w-full md:w-4/5 xl:w-full relative"><div className="absolute top-0 w-full -translate-y-8 text-3xl z-10"><h2 className="bg-slate-500 dark:bg-slate-600 m-auto w-fit p-2 rounded-md text-center text-titleLight dark:text-titleDark">Okul Paylaşımları</h2></div><FetchSchlPosts /></div> */}
            <div className="mt-20 w-full border-4 border-slate-400 mt-20"><h2 className="text-3xl w-fit bg-slate-500 dark:bg-slate-600 m-auto p-2 -translate-y-6 rounded-md text-titleLight dark:text-titleDark">Yazılar</h2><Posts /></div>
            <div className="mt-20 border-4 border-slate-400">
                <h1 className="text-3xl -translate-y-6 bg-slate-500 dark:bg-slate-600 rounded-lg w-fit m-auto p-2 text-titleLight dark:text-titleDark">Gürün&lsquo;ün Komşu İl/İlçelere Mesafesi</h1>
                <FAQ />
            </div>
        </div>
    )
}