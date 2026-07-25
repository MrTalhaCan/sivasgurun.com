import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
import Link from 'next/link'
export const metadata = {
  title: "Sivas Gürün - Şuğul Vadisi",
  description: "Şuğul Vadisi, Sivas'ın Gürün ilçesinde yer alan ve doğaseverlerin mutlaka ziyaret etmesi gereken bir doğa harikasıdır. Gürün ilçe merkezine yaklaşık 4 kilometre mesafede bulunan vadi, sarp kayalıkları, zengin bitki örtüsü ve berrak akarsularıyla huzur verici bir atmosfer sunmaktadır.",
};

export default async function SugulVadisi(){
    const getPostData = async () => {
    try {
        const sql = `SELECT * FROM gezilecekyerler WHERE idgezilecekyerler=2`;
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
        alt="Sugul-Vadisi"
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Şuğul Vadisi / Kanyonu</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].content.mainTitle}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].content.entryText}</p>
                {reslt[0].content.subTexts.map((parag, i) => <div key={i}><h2 className="text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].content.subTitles[i]}</h2><p key={i} className='py-3 tracking-wide dark:text-textDark text-textLight'>{parag}</p></div>)}<div><h2 className="text-lg font-bold dark:text-titleDark text-textLight">Nasıl Giderim?</h2><p className='py-3 tracking-wide dark:text-textDark text-textLight'>Gürün merkez ile vadi arasında 5 dakikalık mesafe vardır. Aşağıdaki harita bilgisini kullanarak ulaşabilirsiniz.
                </p>{/*<figure className="p-2">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2140.6035962808646!2d37.238463001272805!3d38.73882995899836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407813f747f5921f%3A0x2aed35e026c74574!2zxZ51xJ91bCBWYWRpc2k!5e0!3m2!1str!2str!4v1734893626374!5m2!1str!2str" width="600" height="450" className="max-w-screen-lg w-full mx-auto" allowfullscreen="" title="Şuğul Vadisi güzergah"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  <figcaption></figcaption>
</figure>*/}</div>
<p className="dark:text-textDark text-textLight tracking-wide">Gürün&apos;deki doğal güzelliklerden biri olan Şuğul Vadisi&apos;ni gezdikten sonra ilçedeki diğer görülmeye değer yerleri de ziyaret etmek isterseniz <Link href="/gezilecekyerler/gurun"><span className='underline decoration-dotted underline-offset-8 font-bold'>Gürün&apos;deki mekanlar sayfamıza</span></Link> ve <Link href="/yazilar/gurun"><span className="underline decoration-dotted underline-offset-8 font-bold">yazılar sayfamıza</span></Link> göz atabilirsiniz.</p>
                </div>
            </article>
       </section>
)
}