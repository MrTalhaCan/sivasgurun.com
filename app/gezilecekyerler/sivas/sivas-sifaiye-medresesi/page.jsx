import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
export const metadata = {
  title: "Sivasgurun.com - Sivas Şifaiye Medresesi",
  description: "Anadolu Selçuklu döneminin izlerini taşıyan Sivas Şifaiye Medresesi, tarihi dokusu ve mimarisiyle ziyaretçilerini büyülüyor. 1217 yılında inşa edilen bu eşsiz yapı, tıp eğitimi ve sağlık hizmetlerinin merkezi olmuştur. Sivas gezilecek yerler listesinde mutlaka görülmesi gereken Şifaiye Medresesi hakkında detaylı bilgi ve ziyaret ipuçları için sayfamızı ziyaret edin.",
};
export default async function SifaiyeMedresesi(){
    const getPostData = async () => {
    try {
        const sql = `SELECT * FROM gezilecekyerler WHERE idgezilecekyerler=3`;
        const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
        return rows;
    } catch (err) {
        console.error("MySQL Error:", err);
        throw err;
    }
};
const reslt = await getPostData()
    .then(data => data)
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    return(
       <section className='mt-12 max-w-screen-lg w-full mx-auto'>    
            <article className='flex flex-col gap-8'>
                <figure>
                    <Image className='m-auto rounded-lg shadow-lg shadow-slate-500 w-full' width={500} height={500} src={`/${reslt[0].content.mainImg}`} alt="sivas-sifaiye-medresesi" />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Şifaiye Medresesi, Sivas</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].content.mainTitle}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].content.entryText}</p>
                {reslt[0].content.subTexts.map((parag, i) => {
                if(i === 1){
                    return (<><h2 className="text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].content.subTitles[i]}</h2><p key={i} className='py-3 tracking-wide dark:text-textDark text-textLight'>{parag}</p><ul className='px-5'>
                           {reslt[0].content.clauses.map((list, indx) => (<li key={indx} className="tracking-wide dark:text-textDark text-textLight py-1">{list}</li>))}
                        </ul></>)
                }
                    return (<><h2 className="text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].content.subTitles[i]}</h2><p key={i} className='py-3 tracking-wide dark:text-textDark text-textLight'>{parag}</p></>)
                })}
                {/*<figure className="p-2">
                      <iframe src={reslt[0].content.position} width='600' height='450' title="Sivas Şifaiye Medresesi güzergah" className="max-w-screen-lg w-full mx-auto" allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
                      <figcaption></figcaption>
                </figure>*/}
                </div>
            </article>
       </section> 
    )
}