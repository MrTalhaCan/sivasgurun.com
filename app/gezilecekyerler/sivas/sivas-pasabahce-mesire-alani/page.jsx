import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
export const metadata = {
  title: "Sivasgurun.com - Paşabahçe Mesire Alanı",
  description: "Sivas Paşabahçe Mesire Alanı ve meşhur Hobbit Evleri'ni keşfedin! Piknik alanları, yürüyüş parkurları ve ulaşım rehberi ile Sivas'ın en yeşil rotası hakkında her şey. Mangal yapmak için herkese açık doğa ile iç içe bir mekan arıyorsanız doğru adrestesiniz.",
};
export default async function AtaturkKongraBinasi(){
    const getPostData = async () => {
    try {
        const sql = `SELECT * FROM gezilecekyerler WHERE idgezilecekyerler=9`;
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
                    <Image className='m-auto rounded-lg shadow-lg shadow-slate-500 w-full' width={500} height={500} src={`/${reslt[0].content.mainImg}`} alt="sivas-ataturk-kongre-binasi-ve-muzesi" />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Sivas Paşabahçe Mesire Alanı</figcaption>
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
                      <iframe src={reslt[0].content.position} title="Sivas Atatürk Kongre Binası ve Müzesi güzergah"  width='600' height='450' className="max-w-screen-lg w-full mx-auto" allowfullscreen='' loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
                      <figcaption></figcaption>
                </figure>*/}
                </div>
            </article>
       </section> 
    )
}