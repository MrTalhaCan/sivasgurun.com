import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sivas Gürün | Tarih, Doğa ve Kültürün Buluştuğu İlçe",
  description:
    "Sivas'ın güney kapısı Gürün; Gökpınar Gölü, Şuğul Vadisi, tarihi camiler ve binlerce yıllık kültürel mirasıyla keşfedilmeyi bekliyor. Gezilecek yerler, köyler ve daha fazlası.",
  keywords: [
    "Gürün",
    "Sivas Gürün",
    "Gökpınar Gölü",
    "Şuğul Vadisi",
    "Gürün gezilecek yerler",
    "Gürün köyleri",
    "Gürün tarihi",
  ],
  openGraph: {
    title: "Sivas Gürün | Tarih, Doğa ve Kültürün Buluştuğu İlçe",
    description:
      "Gökpınar Gölü, Şuğul Vadisi ve tarihi dokusuyla Gürün'ü keşfedin.",
    url: "https://sivasgurun.com",
    siteName: "Sivas Gürün",
    locale: "tr_TR",
    type: "website",
  },
};

// ——————————————————————————————————————————
// VERİ — gerçek route'larınıza göre güncelleyin
// ——————————————————————————————————————————
const gezilecekYerler = [
  {
    slug: "gokpinar-golu",
    href: "/gezilecekyerler/gurun/gokpinar-golu",
    baslik: "Gökpınar Gölü",
    ozet:
      "15 metre derinliğe kadar kristal berraklığındaki suyu ve turkuaz rengiyle 'Doğal Akvaryum' olarak bilinen eşsiz karstik göl.",
    img: "/Gokpinar-Golu.jpg",
    etiket: "Doğa",
  },
  {
    slug: "sugul-vadisi",
    href: "/gezilecekyerler/gurun/sugul-vadisi",
    baslik: "Şuğul Vadisi",
    ozet:
      "Derin kanyon yapısı, yemyeşil bitki örtüsü ve şelale manzarasıyla doğa yürüyüşçülerinin gözdesi.",
    img: "/sugul.jpg",
    etiket: "Doğa",
  },
];

const sonYazilar = [
  {
    href: "/mekanlar/gurun/gurun-ulu-cami",
    baslik: "Gürün Ulu Cami",
    ozet: "15. yüzyıldan kalma, Gürün'ün en köklü tarihi yapılarından biri.",
    img: "/gurun-ulu-cami.jpg",
    kategori: "Tarih",
  },
  {
    href: "/mekanlar/gurun/gurun-ermeni-kilisesi",
    baslik: "Gürün Ermeni Kilisesi",
    ozet: "19. yüzyıl sonu yapısı; bölgenin çok kültürlü geçmişinin sessiz tanığı.",
    img: "/gurun-ermeni-kilisesi.jpg",
    kategori: "Tarih",
  },
  {
    href: "/mekanlar/gurun/gurun-sali",
    baslik: "Gürün Şalı",
    ozet: "Osmanlı döneminden bu yana üretilen, el dokuma geleneğinin yaşayan mirası.",
    img: "/gurun-sali.jpg",
    kategori: "Kültür",
  },
  {
    href: "/mekanlar/gurun/gurun-kaya-evleri",
    baslik: "Gürün Kaya Evleri",
    ozet: "Doğal kayalara oyulmuş, çağlar boyunca farklı amaçlarla kullanılmış tarihi yapılar.",
    img: "/gurun-kaya-evleri.webp",
    kategori: "Tarih",
  },
  {
    href: "/mekanlar/gurun/gecmisten-bugune-gurun",
    baslik: "Geçmişten Bugüne Gürün",
    ozet: "Antik Tegarama'dan Cumhuriyet'e; binlerce yıllık tarih ve kültürel miras.",
    img: "/gurun-merkez.jpg",
    kategori: "Tarih",
  },
  {
    href: "/mekanlar/gurun/gurun-meydan-cami",
    baslik: "Gürün Meydan Cami",
    ozet: "Osmanlı döneminin izlerini taşıyan, ilçenin manevi merkezindeki tarihi yapı.",
    img: "/gurun-meydan-cami.jpg",
    kategori: "Tarih",
  },
];

const kategoriler = [
  {
    href: "/gezilecekyerler/gurun",
    ikon: "🏔️",
    baslik: "Gezilecek Yerler",
    aciklama: "Göl, vadi ve doğal güzellikler",
  },
  {
    href: "/mekanlar/gurun",
    ikon: "🏛️",
    baslik: "Mekanlar",
    aciklama: "Tarihi yapılar ve anıtlar",
  },
  {
    href: "/koyler/gurun",
    ikon: "🏡",
    baslik: "Köyler",
    aciklama: "Gürün'ün kadim yerleşimleri",
  },
  {
    href: "/hava-durumu/koyler/gurun",
    ikon: "🌤️",
    baslik: "Hava Durumu",
    aciklama: "Anlık ve 3 günlük tahmin",
  },
];

const mesafeler = [
  { yer: "Gökpınar Gölü", km: 12, sure: "15 dk" },
  { yer: "Darende", km: 36, sure: "30 dk" },
  { yer: "Kangal", km: 75, sure: "1 sa" },
  { yer: "Hekimhan", km: 85, sure: "1 sa 25 dk" },
  { yer: "Pınarbaşı", km: 102, sure: "1 sa 10 dk" },
  { yer: "Sivas", km: 136, sure: "1 sa 45 dk" },
  { yer: "Malatya", km: 155, sure: "2 sa" },
  { yer: "Divriği", km: 158, sure: "2 sa" },
];

// ——————————————————————————————————————————
// SAYFA
// ——————————————————————————————————————————
export default function AnaSayfa() {
  return (
    <>
      {/* ── Schema.org JSON-LD (GEO + SEO) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Sivas Gürün",
            url: "https://sivasgurun.com",
            description:
              "Sivas'ın güney kapısı Gürün; tarih, doğa ve kültür rehberi.",
            inLanguage: "tr",
            about: {
              "@type": "Place",
              name: "Gürün",
              addressRegion: "Sivas",
              addressCountry: "TR",
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.7167,
                longitude: 37.2833,
              },
            },
          }),
        }}
      />

      <main className="w-full">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative w-full h-[70vh] min-h-[420px] max-h-[680px] overflow-hidden">
          <Image
            src="/gurun-gokpinar-golu.webp"
            alt="Gökpınar Gölü - Sivas Gürün"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-4 text-center">
            <p className="text-gurun text-sm font-semibold tracking-[0.25em] uppercase mb-3">
              Sivas • Türkiye
            </p>
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
              Gürün'ü Keşfedin
            </h1>
            <p className="text-white/85 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              Binlerce yıllık tarih, kristal göller ve el değmemiş vadileriyle
              Sivas'ın güney kapısına hoş geldiniz.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/gezilecekyerler/gurun"
                className="px-6 py-3 bg-gurun text-black font-semibold rounded-full text-sm hover:bg-green-400 transition-colors"
              >
                Gezilecek Yerler
              </Link>
              <Link
                href="/hakkimizda"
                className="px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-full text-sm border border-white/30 hover:bg-white/25 transition-colors"
              >
                Gürün Hakkında
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            KATEGORİ HIZLI ERİŞİM
        ═══════════════════════════════════════ */}
        <section className="max-w-screen-lg mx-auto px-4 -mt-8 relative z-10 mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {kategoriler.map((k) => (
              <Link
                key={k.href}
                href={k.href}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl
                           bg-white dark:bg-slate-800
                           border border-slate-100 dark:border-slate-700
                           shadow-md hover:shadow-lg hover:-translate-y-1
                           transition-all duration-200 text-center"
              >
                <span className="text-3xl">{k.ikon}</span>
                <span className="text-sm font-bold dark:text-titleDark text-slate-800">
                  {k.baslik}
                </span>
                <span className="text-xs dark:text-textDark text-slate-500 leading-snug">
                  {k.aciklama}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GEZİLECEK YERLER
        ═══════════════════════════════════════ */}
        <section
          className="max-w-screen-lg mx-auto px-4 mb-20"
          aria-labelledby="gezilecek-baslik"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-gurun text-xs font-semibold tracking-widest uppercase mb-1">
                Doğa & Turizm
              </p>
              <h2
                id="gezilecek-baslik"
                className="text-2xl sm:text-3xl font-bold dark:text-titleDark text-slate-900"
              >
                Gezilecek Yerler
              </h2>
            </div>
            <Link
              href="/gezilecekyerler/gurun"
              className="text-sm font-semibold text-gurun hover:underline hidden sm:block"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {gezilecekYerler.map((yer) => (
              <Link
                key={yer.slug}
                href={yer.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] block"
              >
                <Image
                  src={yer.img}
                  alt={yer.baslik}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block text-xs font-semibold text-gurun bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full mb-2">
                    {yer.etiket}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-1">{yer.baslik}</h3>
                  <p className="text-white/75 text-sm leading-snug line-clamp-2">
                    {yer.ozet}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 sm:hidden text-center">
            <Link href="/gezilecekyerler/gurun" className="text-sm font-semibold text-gurun">
              Tüm Gezilecek Yerler →
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            GÜRÜN HAKKINDA — SEO metin bloğu
        ═══════════════════════════════════════ */}
        <section
          className="max-w-screen-lg mx-auto px-4 mb-20"
          aria-labelledby="hakkinda-baslik"
        >
          <div className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-8 sm:p-12">
            <p className="text-gurun text-xs font-semibold tracking-widest uppercase mb-2">
              Gürün Hakkında
            </p>
            <h2
              id="hakkinda-baslik"
              className="text-2xl sm:text-3xl font-bold dark:text-titleDark text-slate-900 mb-6"
            >
              Sivas'ın Güney Kapısı
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="dark:text-textDark text-slate-600 leading-relaxed text-sm mb-4">
                  Gürün, Sivas iline bağlı, antik çağlarda <strong className="dark:text-titleDark text-slate-800">Tegarama</strong> adıyla
                  bilinen köklü bir Anadolu ilçesidir. Hititlerden Osmanlı'ya kadar
                  uzanan tarih boyunca Mezopotamya ile Anadolu arasındaki stratejik
                  konumuyla medeniyetlerin buluşma noktası olmuştur.
                </p>
                <p className="dark:text-textDark text-slate-600 leading-relaxed text-sm">
                  Günümüzde <strong className="dark:text-titleDark text-slate-800">Gökpınar Gölü</strong> ve{" "}
                  <strong className="dark:text-titleDark text-slate-800">Şuğul Vadisi</strong> ile doğa
                  turizminin önemli bir merkezi haline gelen Gürün; tarihi camileri,
                  kaya evleri ve el sanatlarıyla da ziyaretçilerine eşsiz bir kültürel
                  deneyim sunmaktadır.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { sayi: "1.500m", etiket: "Deniz Seviyesi" },
                  { sayi: "15m", etiket: "Gökpınar Derinliği" },
                  { sayi: "136km", etiket: "Sivas'a Mesafe" },
                  { sayi: "3.000+", etiket: "Yıllık Tarih" },
                ].map((stat) => (
                  <div
                    key={stat.etiket}
                    className="flex flex-col items-center justify-center p-4 rounded-xl
                               bg-slate-50 dark:bg-slate-700/50 text-center"
                  >
                    <span className="text-2xl font-bold text-gurun">{stat.sayi}</span>
                    <span className="text-xs dark:text-textDark text-slate-500 mt-1">
                      {stat.etiket}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MESAFE TABLOSU — GEO SEO
        ═══════════════════════════════════════ */}
        <section
          className="max-w-screen-lg mx-auto px-4 mb-20"
          aria-labelledby="mesafe-baslik"
        >
          <div>
            <p className="text-gurun text-xs font-semibold tracking-widest uppercase mb-1">
              Konum & Ulaşım
            </p>
            <h2
              id="mesafe-baslik"
              className="text-2xl sm:text-3xl font-bold dark:text-titleDark text-slate-900 mb-8"
            >
              Gürün'e Mesafeler
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {mesafeler.map((m) => (
              <div
                key={m.yer}
                className="flex items-center justify-between p-4 rounded-xl
                           bg-white dark:bg-slate-800
                           border border-slate-100 dark:border-slate-700"
              >
                <div>
                  <p className="text-sm font-semibold dark:text-titleDark text-slate-800">
                    {m.yer}
                  </p>
                  <p className="text-xs dark:text-textDark text-slate-400 mt-0.5">
                    {m.sure}
                  </p>
                </div>
                <span className="text-sm font-bold text-gurun">{m.km} km</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}