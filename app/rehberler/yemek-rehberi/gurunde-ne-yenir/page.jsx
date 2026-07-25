import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
import Link from 'next/link'
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gürün’de ne yenir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gürün’de madımak yemeği, hingel (Sivas mantısı), Sivas köftesi ve kesme aşı çorbası gibi yöresel lezzetler öne çıkar. Ayrıca köy kahvaltılarında doğal tereyağı, peynir ve bal da sıkça tüketilir."
      }
    },
    {
      "@type": "Question",
      "name": "Gürün’ün en meşhur yemeği nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gürün’ün en meşhur yemeklerinden biri madımak yemeğidir. Bunun yanında hingel (mantı) ve Sivas köftesi de oldukça popülerdir."
      }
    },
    {
      "@type": "Question",
      "name": "Gürün’de yöresel yemekler nerede yenir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gürün’de yöresel yemekleri en iyi şekilde deneyimleyebileceğiniz yerler esnaf lokantaları ve ev yemekleri sunan küçük işletmelerdir. Ayrıca bazı köy evlerinde de geleneksel lezzetler bulunabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Gürün kahvaltısında neler olur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gürün kahvaltısında doğal tereyağı, köy peyniri, bal, yoğurt, bazlama ve katmer gibi yöresel ürünler bulunur. Tamamen doğal ve katkısız ürünler tercih edilir."
      }
    },
    {
      "@type": "Question",
      "name": "Gürün mutfağının özelliği nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gürün mutfağı, doğal ve yerel ürünlere dayalı olmasıyla öne çıkar. Yemeklerde katkı maddesi kullanılmaz, genellikle et yemekleri, hamur işleri ve doğal ürünler ağırlıktadır."
      }
    }
  ]
};

export const metadata = {
  title: "Gürün’de Ne Yenir? | Sivas Gürün Yöresel Lezzetler Rehberi",
  description: "Gürün’de ne yenir? Sivas Gürün’ün meşhur yemekleri, yöresel lezzetleri ve en iyi yemek önerileri bu rehberde.",
  keywords: [
    "gürün ne yenir",
    "gürün yemekleri",
    "sivas gürün yemekleri",
    "gürün yöresel lezzetler",
    "sivas ne yenir"
  ],
  other: {
    "application/ld+json": JSON.stringify(faqSchema)
  },
};

export default async function GurunDeNeYenir(){
    const getPostData = async () => {
    try {
        const sql = `SELECT * FROM yazilar WHERE idyazilar=75`;
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
		                </div>
            </article>
       </section> 
    )
}
