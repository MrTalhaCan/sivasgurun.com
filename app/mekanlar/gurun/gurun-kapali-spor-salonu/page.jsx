import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image'
export const metadata = {
  title: "Sivasgurun.com - Gürün Kapalı Spor Salonu",
  description: "Gürün Kapalı Spor Salonu, Sivas'ın Gürün ilçesinde spor tutkunları için modern bir tesis. Basketbol, voleybol, badminton, masa tenisi ve diğer salon sporlarına ev sahipliği yapan bu salon, bölgenin sportif faaliyetlerinin merkezi konumunda. Gürün halkı ve spor kulüpleri için ideal bir mekan olan Kapalı Spor Salonu, etkinlikler ve turnuvalarla sosyal hayata renk katıyor.",
};
export default async function KapaliSporSalonu(){
const getPostData = async () => {
    try {
        const sql = `select * from yazilar WHERE idyazilar=10`;
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
        alt="gurun-kapali-spor-salonu"
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Gürün Kapalı Spor Salonu</figcaption>
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