import { Pool } from "@/app/ApiFetchs/pool";
import Image from 'next/image';
export const metadata = {
  title: "Sivasgurun.com - Gürün Kapalı Yüzme Havuzu",
  description: "Gürün Kapalı Yüzme Havuzu, Sivas'ın Gürün ilçesinde yüzme tutkunları ve spor severler için modern bir tesis. Yılın her dönemi kullanılabilen bu havuz, hem yetişkinler hem de çocuklar için yüzme eğitimleri ve spor aktiviteleri sunuyor. Gürün'de sağlıklı yaşam ve sporun buluşma noktası olan Kapalı Yüzme Havuzu, ziyaretçilere keyifli ve güvenli bir deneyim vaat ediyor.",
};
export default async function KapaliYuzmeHavuzu(){
const getPostData = async () => {
    try {
        const sql = `select * from yazilar WHERE idyazilar=11`;
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
        alt="gurun-kapali-yuzme-havuzu"
      />
                    <figcaption className='text-center dark:text-textDark text-textLight'>Gürün Kapalı Yüzme Havuzu</figcaption>
                </figure>
                <div className='p-3 text-justify'>
                    <header>
                        <h1 className='text-2xl font-bold dark:text-titleDark text-textLight'>{reslt[0].results.title}</h1>
                    </header>
                    <p className='py-3 tracking-wide dark:text-textDark text-textLight'>{reslt[0].results.entryText}</p>
                {reslt[0].results.subTexts.map((parag, i) => <><h2 className="text-lg font-bold dark:text-titleDark text-textLight">{reslt[0].results.subTitles[i]}</h2><p key={i} className='py-3 tracking-wide dark:text-textDark text-textLight'>{parag}</p></>)}
		<h2 className="text-lg font-bold dark:text-titleDark text-textLight">Havuz Binası İçerisinde Yer Alan Diğer Alanlar</h2>
		<p className='py-3 tracking-wide dark:text-textDark text-textLight'>Yetişkin yüzme yavuzunun derinliği ortalama 1.8 m dir. Çocuk havuzu ise genellikle çocuklarımızın bel seviyesini geçmemektedir. Bunun yanında havuzlara bitişik yer alan, 10 kişinin rahatlıkla kullanabileceği jakuzi bulunmaktadır. Havuz kapısınında yer aldığı koridorun sonunda sauna ve hamam da bulunuyor. Hamamda sıcak/soğuk suyla birlikte çeşmelerin altında su küvetleri, hamamın ortasında ise göbek taşı bulunmaktadır. Hamamın keyfini çıkarmak istiyorsanız yanınızda kese de getirmeyi unutmayın :) Saunadan bahsedecek olursak, ahşap ile donatılmış odanın bir kenarında ısıtma sistemi bulunuyor. Tavan köşelerinde yer alan loş sarı avizeler ise ortama ahenkli bir hava katıyor. İsterseniz odaya mentol de ekleyebiliyorsunuz. Odanın sıcaklığını görebileceğiniz termometre ve ortamda geçirdiğiniz süreyi ölçebileceğiniz kum saati bulunuyor. Fakat saunaya kıyafet ve terlikle giremiyorsunuz.</p>
		<h2 className="text-lg font-bold dark:text-titleDark text-textLight">Havuza Gelirken Getirilmesi Gerekenler</h2>
		<p className='py-3 tracking-wide dark:text-textDark text-textLight'>Yetkililer tarafından listelenen, havuz binasının dış kapısına da iliştirilen şu eşyaların getirilmesi gerekmektedir: <b>Şort, temiz terlik, havuz bonesi, havlu</b>. Ayrıca, Havuza girmeden duş alınması gerekiyor. Yanınızda şampuan/sabun da getirebilirsiniz.</p>
		<h2 className="text-lg font-bold dark:text-titleDark text-textLight">Gürün Kapalı Yüzme Havuzu Seans Saatleri (Güncel - 07 Ocak 2026)</h2>
		<p className='py-3 tracking-wide dark:text-textDark text-textLight'>Havuzda görev yapan cankurtaranların sözleşmelerinin sona ermesi sebebiyle geçici olarak seanslara ara verilmiştir.</p>	
		<h2 className="text-lg font-bold dark:text-titleDark text-textLight">Konum - Ulaşım ve İletişim</h2>
		<p className='py-3 tracking-wide dark:text-textDark text-textLight'>İlçemizde bulunan Sivas yol ayrımının karşında cezaevi sokak bulunmaktadır. Yol bir kenarında ilçe halı sahasını görecek, diğer yanında ise Milli Eğitim Müdürliği (MEM) ve Halk Eğitim Merkezini göreceksiniz. Bu soktaktan 100 m ilerde köprü göreceksiniz. Köprüden sonra gelen ilk sağa yani dere yoluna girin. Havuz solunuzda kalacak. Aşağıda verdiğim iletişim numarasından bilgi alabilirsiniz.</p>
<p className='py-2 tracking-wide dark:text-textDark text-textLight'>Tel: <b>0 346 715 16 48</b></p>
		{/*<figure className="p-2">
                      <iframe className="max-w-screen-lg w-full mx-auto" src={reslt[0].results.rota} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      <figcaption></figcaption>
                </figure>*/}
                </div>
            </article>
       </section> 
    )
}