import React from "react";
export const metadata = {
  title: "Hakkımızda - sivasgurun.com",
  description: "sivasgurun.com hakkında bilgi alın. Gürün ilçesinin gezilecek yerleri, tarihi ve kültürel değerlerini tanıtan yerel rehber.",
};
const Hakkimizda = () => {
  return (
    <main className="mt-12 max-w-screen-lg w-full mx-auto">
      <article class="flex flex-col gap-8">
	<div>
	<h1 class="text-2xl font-bold dark:text-titleDark text-textLight">Hakkımızda</h1>

        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          <strong>sivasgurun.com</strong>, Sivas’ın Gürün ilçesini ve çevresini
          tanıtmak amacıyla kurulmuş yerel bir bilgi ve gezi rehberi sitesidir.
          Amacımız; Gürün’ün doğal güzelliklerini, tarihi yapıları, kültürel
          değerlerini ve yaşamına dair bilgileri doğru, güncel ve özgün
          içeriklerle ziyaretçilere sunmaktır.
        </p>

        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          Sitemizde yer alan içerikler; gezilecek yerler, doğal alanlar, tarihi
          yapılar, yerel yaşam ve kültür ile bilgilendirici rehber yazıları gibi
          başlıklar altında, kullanıcıya gerçek fayda sağlamayı hedefleyen
          editoryal çalışmalar ile hazırlanmaktadır.
        </p>
</div> 
	<div>
	<h2 class="text-lg font-bold dark:text-titleDark text-textLight">Yayın İlkelerimiz</h2>
        <ul class="py-3 px-3 dark:text-titleDark text-textLight">
          <li>İçerikler özgün olarak hazırlanır</li>
          <li>Kopya veya otomatik içerik kullanılmaz</li>
          <li>Bilgiler düzenli olarak güncellenir</li>
          <li>Yanıltıcı veya doğrulanmamış bilgiye yer verilmez</li>
        </ul>

        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          sivasgurun.com, herhangi bir resmi kurum veya kamu kuruluşu ile
          bağlantılı değildir. Yayınlanan içerikler bilgilendirme amaçlıdır.
        </p>

        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          Yerel değerlerin dijital ortamda doğru şekilde temsil edilmesine katkı
          sağlamayı hedefleyen bir yayıncı olarak, kullanıcı geri bildirimlerine
          önem veriyoruz.
        </p>
</div>  
      </article>
    </main>
  );
};

export default Hakkimizda;
