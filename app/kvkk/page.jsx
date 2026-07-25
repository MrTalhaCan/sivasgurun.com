import React from "react";

export const metadata = {
  title: "KVKK & Kullanım Koşulları - sivasgurun.com",
  description:
    "sivasgurun.com KVKK aydınlatma metni ve kullanım koşulları. Kişisel verilerin korunması, haklarınız ve yasal bilgilendirme.",
};

const KvkkKullanimKosullari = () => {
  return (
    <main className="mt-12 max-w-screen-lg w-full mx-auto">
      <article className="flex flex-col gap-8">
        <div>
          <h1 className="text-2xl font-bold dark:text-titleDark text-textLight">
            KVKK & Kullanım Koşulları
          </h1>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Bu metin, <strong>6698 sayılı Kişisel Verilerin Korunması Kanunu
            (KVKK)</strong> uyarınca <strong>sivasgurun.com</strong> veri
            sorumlusu sıfatıyla hazırlanmış aydınlatma metni ve kullanım
            koşullarını içermektedir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Veri Sorumlusu
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            6698 sayılı KVKK uyarınca veri sorumlusu sıfatıyla hareket eden
            sivasgurun.com, kişisel verilerinizi aşağıda açıklanan amaçlar
            doğrultusunda ve kanunun çizdiği sınırlar içinde işlemektedir.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            İşlenen Kişisel Veriler
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Sitemizi kullandığınızda aşağıdaki veriler toplanabilir:
          </p>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>Otomatik veriler:</strong> IP adresi, tarayıcı türü,
              işletim sistemi, ziyaret saati ve görüntülenen sayfalar
            </li>
            <li>
              <strong>İletişim verileri:</strong> İletişim formunu
              doldurduğunuzda ad, soyad ve e-posta adresi
            </li>
            <li>
              <strong>Analitik veriler:</strong> Google Analytics aracılığıyla
              anonim kullanım istatistikleri
            </li>
            <li>
              <strong>Reklam verileri:</strong> Google AdSense çerezleri
              aracılığıyla ilgi alanı bilgileri
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Kişisel Verilerin İşlenme Amaçları
          </h2>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>Web sitesinin işlevselliğini ve güvenliğini sağlamak</li>
            <li>
              Kullanıcı deneyimini iyileştirmek ve site performansını analiz
              etmek
            </li>
            <li>İletişim taleplerinizi yanıtlamak</li>
            <li>İlgili reklamlar göstermek (Google AdSense)</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Üçüncü Taraflarla Paylaşım
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla
            ticari amaçlarla paylaşılmaz. Ancak aşağıdaki durumlarda aktarım
            söz konusu olabilir:
          </p>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>Google LLC:</strong> Analytics ve AdSense hizmetleri
              kapsamında anonim/takma adlı veriler
            </li>
            <li>
              <strong>Yasal zorunluluk:</strong> Yetkili kamu kurumlarının
              talepleri
            </li>
            <li>
              <strong>Hosting sağlayıcısı:</strong> Teknik altyapı
              gereklilikleri dahilinde
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            KVKK Kapsamındaki Haklarınız
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>Bilgi talep etme:</strong> Verilerinizin işlenip
              işlenmediğini öğrenme hakkı
            </li>
            <li>
              <strong>Erişim hakkı:</strong> İşlenen verileriniz hakkında bilgi
              edinme
            </li>
            <li>
              <strong>Düzeltme hakkı:</strong> Yanlış veya eksik verilerin
              düzeltilmesini isteme
            </li>
            <li>
              <strong>Silme hakkı:</strong> Koşulların oluşması halinde
              verilerinizin silinmesini talep etme
            </li>
            <li>
              <strong>İtiraz hakkı:</strong> Otomatik sistemlerle aleyhte karar
              oluşturulmasına itiraz etme
            </li>
            <li>
              <strong>Tazminat hakkı:</strong> Hukuka aykırı işlem nedeniyle
              oluşan zararın tazminini talep etme
            </li>
          </ul>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Haklarınızı kullanmak için{" "}
            <a
              href="/iletisim"
              className="underline dark:text-titleDark text-textLight"
            >
              iletişim sayfamız
            </a>{" "}
            aracılığıyla bize ulaşabilirsiniz. Başvurularınız KVKK&apos;nın 13.
            maddesi gereğince en geç 30 gün içinde yanıtlanacaktır.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Veri Saklama Süreleri
          </h2>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              <strong>İletişim formu verileri:</strong> Talep sonuçlanana kadar,
              en fazla 2 yıl
            </li>
            <li>
              <strong>Analitik veriler:</strong> 26 ay (Google Analytics
              varsayılan süresi)
            </li>
            <li>
              <strong>Sunucu log kayıtları:</strong> 1 yıl
            </li>
            <li>
              <strong>Yasal yükümlülük gerektiren veriler:</strong> İlgili
              mevzuatta öngörülen süreler
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Kullanım Koşulları
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            sivasgurun.com sitesini kullanarak aşağıdaki koşulları kabul etmiş
            sayılırsınız:
          </p>
          <ul className="py-3 px-3 dark:text-titleDark text-textLight flex flex-col gap-2">
            <li>
              Sitedeki tüm içerikler (yazılar, görseller, tasarım) telif hakkı
              kapsamındadır; kaynak gösterilmeden kopyalanamaz veya
              dağıtılamaz.
            </li>
            <li>
              Site içeriğini ticari amaçlarla kullanmak için önceden yazılı
              izin alınması zorunludur.
            </li>
            <li>
              Sitede yer alan bilgiler genel bilgilendirme amaçlıdır; resmi
              kaynak olarak kullanılmamalıdır.
            </li>
            <li>
              Üçüncü taraf bağlantılara tıklamanız durumunda sitenin
              sorumluluğu sona erer; ilgili sitelerin kendi gizlilik politikaları
              geçerlidir.
            </li>
            <li>
              Siteye zarar vermeye yönelik her türlü eylem yasal yaptırıma
              tabidir.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold dark:text-titleDark text-textLight">
            Politika Değişiklikleri
          </h2>
          <p className="py-3 tracking-wide dark:text-textDark text-textLight">
            Bu metin gerekli görüldüğünde güncellenebilir. Değişiklikler bu
            sayfa üzerinden yayınlanır ve yayınlandığı tarihten itibaren
            geçerli olur. Siteyi kullanmaya devam etmeniz güncel koşulları
            kabul ettiğiniz anlamına gelir.
          </p>
        </div>
      </article>
    </main>
  );
};

export default KvkkKullanimKosullari;