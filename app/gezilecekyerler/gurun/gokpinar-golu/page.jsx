import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
import Link from 'next/link'
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gökpınar Gölü nerede?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gökpınar Gölü, Sivas ilinin Gürün ilçesinde yer alır. Gürün merkezine yaklaşık 10 kilometre uzaklıktadır."
      }
    },
    {
      "@type": "Question",
      "name": "Gökpınar Gölü’ne nasıl gidilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gökpınar Gölü’ne özel araç, minibüs veya taksi ile ulaşım mümkündür. Kayseri–Malatya karayoluna yakın konumdadır."
      }
    },
    {
      "@type": "Question",
      "name": "Gökpınar Gölü doğal sit alanı mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet. Gökpınar Gölü 2021 yılında Doğal Sit – Nitelikli Doğal Koruma Alanı olarak tescillenmiştir."
      }
    }
  ]
};

export const metadata = {
  title: "Sivas Gürün - Gökpınar Gölü",
  description: "Sivas Gürün Gökpınar Gölü hakkında detaylı bilgiler: nerede, nasıl gidilir, özellikleri, ziyaret saatleri ve güncel gezi rehberi.",
  other: {
    "application/ld+json": JSON.stringify(faqSchema)
  },
};

export default async function GokpinarGolu(){
    const getPostData = async () => {
    try {
        const sql = `SELECT * FROM gezilecekyerler WHERE idgezilecekyerler=1`;
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
        src={`/${reslt[0].content.mainImg}`}
        width={500}
        height={500}
        alt={reslt[0].content.title}
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>{reslt[0].content.title}</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].content.title}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].content.entryText}</p>
                                        {reslt[0].content.subContents.titles.map((mainTitle, mainIndex) => {
                                          const { entryText, titles, contents } = reslt[0].content.subContents.contents[mainIndex];
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
                <p className="dark:text-textDark text-textLight tracking-wide">Gürün&apos;deki doğal güzelliklerden biri olan Gökpınar Gölü&apos;nü gezdikten sonra ilçedeki diğer görülmeye değer yerleri de ziyaret etmek isterseniz <Link href="/gezilecekyerler/gurun"><span className='underline decoration-dotted underline-offset-8 font-bold'>Gürün&apos;deki mekanlar sayfamıza</span></Link> ve <Link href="/yazilar/gurun"><span className="underline decoration-dotted underline-offset-8 font-bold">yazılar sayfamıza</span></Link> göz atabilirsiniz.</p>
                </div>
            </article>
       </section>
    )
}
