import React from "react";

export const metadata = {
  title: "Gizlilik Politikamız - sivasgurun.com",
  description:
    "sivasgurun.com gizlilik politikası. Kişisel verilerin korunması, çerezler, üçüncü taraf hizmetler ve kullanıcı gizliliğine dair detaylı bilgilendirme.",
};

const GizlilikPolitikasi = () => {
  return (
    <main className="mt-12 max-w-screen-lg w-full mx-auto">
      <article className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold dark:text-titleDark text-textLight">
            Gizlilik Politikamız
          </h1>

          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            <strong>sivasgurun.com</strong> olarak ziyaretçilerimizin gizliliğine
            büyük önem veriyoruz. Bu gizlilik politikası, sitemizi ziyaret
            ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve
            nasıl korunduğunu açıklamaktadır.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Toplanan Bilgiler
          </h2>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight">
            <li>IP adresi</li>
            <li>Tarayıcı türü ve sürümü</li>
            <li>Ziyaret edilen sayfalar</li>
            <li>Ziyaret tarihi ve saati</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Çerezler (Cookies)
          </h2>

          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            sitemiz, kullanıcı deneyimini geliştirmek ve istatistiksel veriler
            elde etmek amacıyla çerezler kullanabilir. Tarayıcı ayarlarınızdan
            çerezleri devre dışı bırakabilirsiniz; ancak bu durumda sitenin bazı
            bölümleri beklenen şekilde çalışmayabilir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Üçüncü Taraf Hizmetler
          </h2>

          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            sivasgurun.com, Google gibi üçüncü taraf hizmet sağlayıcılarını
            kullanabilir. Bu hizmetler, reklam ve analiz amaçlı olarak çerezler
            kullanabilir. Üçüncü tarafların kendi gizlilik politikaları geçerlidir
            ve bu hizmetlerin kullanımından doğabilecek sorumluluklar ilgili
            firmalara aittir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Bilgilerin Korunması
          </h2>

          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Toplanan bilgiler, yetkisiz erişimlere karşı korunmak için makul
            teknik ve idari önlemlerle güvence altına alınmaktadır. Ancak internet
            üzerinden yapılan veri iletiminin %100 güvenli olduğu garanti
            edilemez.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Gizlilik Politikası Değişiklikleri
          </h2>

          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Bu gizlilik politikası, gerekli görüldüğü durumlarda güncellenebilir.
            Yapılan değişiklikler bu sayfa üzerinden yayınlanır ve yayınlandığı
            tarihten itibaren geçerli olur.
          </p>
        </div>
      </article>
    </main>
  );
};

export default GizlilikPolitikasi;