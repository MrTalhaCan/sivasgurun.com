import { Pool } from "@/app/ApiFetchs/pool";
import Link from 'next/link'
import Image from 'next/image';
export const metadata = {
  title: "Sivas Gürün - Çiçekyurt Köyü",
  description: "Gürün Çiçekyurt Köyü, Sivas'ın geleneksel köy yaşantısını sürdüren, doğal güzelliklerle çevrili bir yerleşimi. Verimli topraklarıyla tarım ve hayvancılığın öne çıktığı köy, yöresel kültürü ve sakin atmosferiyle ziyaretçilerini ağırlıyor. Doğa yürüyüşleri ve huzurlu bir kaçamak için ideal.",
};
export default async function CicekyurtKoyu(){
const getPostData = async () => {
    try {
        const sql = `select * from yazilar WHERE idyazilar=26`;
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
        alt={reslt[0].results.title}
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>{reslt[0].results.title}</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].results.title}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].results.entryText}</p>
					{reslt[0].results.subContents.titles.map((mainTitle, mainIndex) => {
					  const { entryText, titles, contents } = reslt[0].results.subContents.contents[mainIndex];
						return (
							<div key={`section-${mainIndex}`}>
							  <h2 className="text-lg font-bold dark:text-titleDark text-textLight">{mainTitle}</h2>
							  {entryText && <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{entryText}</p>}
								  {titles?.length > 0 && (
									<ul className="py-3 px-3">
									  {titles?.map((subTitle, subIndex) => (
										<li key={`subsection-${mainIndex}-${subIndex}`}>
											<div>
											  <h3 className="font-bold dark:text-titleDark text-textLight">{subTitle}</h3>
											  {contents?.[subIndex]?.entryText && <p className="py-3 tracking-wide dark:text-textDark text-textLight">{contents[subIndex].entryText}</p>}
											</div>
										</li>
									  ))}
									</ul>
								  )}
							</div>
						)
					}
					)}
<Link href={`/hava-durumu/koyler/gurun`}><div class="py-3 text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].results.title} hava durumu için <span class="underline decoration-dashed underline-offset-4 text-blue-500">TIKLAYIN.</span></div></Link>
                </div>
            </article>
       </section> 
    )
}