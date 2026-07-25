import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
export const metadata = {
  title: "Sivasgurun.com - Gürün Ermeni Kilisesi",
  description: "Gürün Ermeni Kilisesi, Sivas'ın Gürün ilçesinde bulunan tarihi ve kültürel bir miras. 19. yüzyılda inşa edilen bu kilise, taş işçiliği ve mimarisiyle dikkat çekiyor. Gürün'ün çok kültürlü geçmişini yansıtan bu yapı, ziyaretçilere tarihi bir yolculuk sunuyor. Gürün Ermeni Kilisesi hakkında detaylı bilgi ve ziyaret ipuçları için sayfamızı ziyaret edin.",
};
export default async function ErmeniKilisesi(){
const getPostData = async () => {
    try {
        const sql = `select * from yazilar WHERE idyazilar=2`;
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
                 <Image
	className='m-auto rounded-lg shadow-lg shadow-slate-500'
        src={`/${reslt[0].results.mainImg}`}
        width={500}
        height={500}
        alt="gurun-ermeni-kilisesi"
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Gürün, Ermeni Kilisesi</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].results.title}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].results.entryText}</p>
                {reslt[0].results.subTexts.map((parag, i) => <><h2 className="text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].results.subTitles[i]}</h2><p key={i} className='py-3 tracking-wide dark:text-textDark text-textLight'>{parag}</p></>)}
                <h2 className="text-lg font-bold dark:text-titleDark text-textLight">Konum</h2>
                {/*<figure className="p-2">
                      <iframe className="max-w-screen-lg w-full mx-auto" src={reslt[0].results.rota} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <figcaption></figcaption>
                </figure>*/}
                </div>
            </article>
       </section> 
    )
}