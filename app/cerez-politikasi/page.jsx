import React from "react";

export const metadata = {
  title: "Çerez Politikası - sivasgurun.com",
  description:
    "sivasgurun.com çerez politikası. Sitemizde kullanılan çerezler, amaçları ve nasıl yönetebileceğinize dair detaylı bilgilendirme.",
};

const CerezPolitikasi = () => {
  return (
    <main className="mt-12 max-w-screen-lg w-full mx-auto">
      <article className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold dark:text-titleDark text-textLight">
            Çerez Politikası
          </h1>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            <strong>sivasgurun.com</strong> olarak sitemizde çerezler
            kullanılmaktadır. Bu politika, hangi çerezlerin kullanıldığını,
            amaçlarını ve çerezleri nasıl yönetebileceğinizi açıklamaktadır.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Çerez Nedir?
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza
            kaydedilen küçük metin dosyalarıdır. Sizi bir sonraki ziyaretinizde
            tanımak, tercihlerinizi hatırlamak ve kullanıcı deneyimini
            iyileştirmek amacıyla kullanılırlar.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Kullandığımız Çerez Türleri
          </h2>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevselliğini
              sağlamak için gereklidir. Oturum yönetimi ve güvenlik amacıyla
              kullanılır, oturum süresince aktif kalır.
            </li>
            <li>
              <strong>Analitik Çerezler:</strong> Ziyaretçi davranışlarını anonim
              olarak analiz etmek için kullanılır (Google Analytics). 2 yıla kadar
              saklanabilir.
            </li>
            <li>
              <strong>Reklam Çerezleri:</strong> Google AdSense aracılığıyla ilgi
              alanlarınıza uygun reklamlar göstermek için kullanılır. 2 yıla kadar
              saklanabilir.
            </li>
            <li>
              <strong>Tercih Çerezleri:</strong> Dil ve görüntü tercihleri gibi
              ayarlarınızı hatırlamak için kullanılır. 1 yıla kadar saklanabilir.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Google AdSense ve Üçüncü Taraf Çerezler
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Sitemizde Google AdSense reklam sistemi kullanılmaktadır. Google, bu
            sistem aracılığıyla ilgi alanlarınıza uygun reklamlar göstermek için
            çerezler ve web işaretçileri kullanabilir. Google&apos;ın çerez
            politikası hakkında bilgi almak için{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline dark:text-titleDark text-textLight"
            >
              Google Reklam Politikaları
            </a>{" "}
            sayfasını ziyaret edebilirsiniz. Kişiselleştirilmiş reklamları devre
            dışı bırakmak için{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline dark:text-titleDark text-textLight"
            >
              Google Reklam Ayarları
            </a>{" "}
            sayfasını kullanabilirsiniz.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Çerezleri Nasıl Kontrol Edebilirsiniz?
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Çerezleri tarayıcı ayarlarınızdan yönetebilir veya silebilirsiniz.
            Çerezleri devre dışı bırakmanız durumunda sitenin bazı özelliklerinin
            düzgün çalışmayabileceğini belirtmek isteriz.
          </p>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>Google Chrome:</strong> Ayarlar → Gizlilik ve güvenlik →
              Çerezler
            </li>
            <li>
              <strong>Mozilla Firefox:</strong> Tercihler → Gizlilik ve Güvenlik
              → Çerezler
            </li>
            <li>
              <strong>Safari:</strong> Tercihler → Gizlilik → Çerezleri Yönet
            </li>
            <li>
              <strong>Microsoft Edge:</strong> Ayarlar → Gizlilik, arama ve
              hizmetler → Çerezler
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Çerez Politikası Değişiklikleri
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Bu Çerez Politikası zaman zaman güncellenebilir. Değişiklikler bu
            sayfada yayımlandığı tarihten itibaren geçerli olur. Politikamızı
            düzenli olarak incelemenizi tavsiye ederiz.
          </p>
        </div>
      </article>
    </main>
  );
};

export default CerezPolitikasi;