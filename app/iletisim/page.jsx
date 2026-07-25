import React from "react";
export const metadata = {
  title: "İletişim - sivasgurun.com",
  description: "sivasgurun.com iletişim bilgileri. Görüş, öneri ve iş birliği için bizimle iletişime geçin.",
};
const Iletisim = () => {
  return (
    <main className="mt-12 max-w-screen-lg w-full mx-auto">
      <article class="flex flex-col gap-8">
<div><h1 class="text-2xl font-bold dark:text-titleDark text-textLight">İletişim</h1>


        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          <strong>sivasgurun.com</strong> ile ilgili her türlü görüş, öneri,
          düzeltme talebi veya iş birliği konuları için aşağıdaki iletişim
          kanallarını kullanabilirsiniz.
        </p></div>
<div></div>
        <h2 class="text-lg font-bold dark:text-titleDark text-textLight">İletişim Bilgileri</h2>
<p class="py-3 tracking-wide dark:text-textDark text-textLight">
        <strong>E-posta:</strong>{" "}
            <a href="mailto:info@sivasgurun.com">
              iletisim@sivasgurun.com
            </a>
</p>
<p class="py-3 tracking-wide dark:text-textDark text-textLight">
          Gelen mesajlar düzenli olarak kontrol edilmekte olup, en kısa sürede
          geri dönüş sağlanmaktadır.
        </p>

        <p class="py-3 tracking-wide dark:text-textDark text-textLight">
          Not: İletişim bilgilerimiz yalnızca bilgilendirme ve iletişim amacıyla
          kullanılmakta olup üçüncü kişilerle paylaşılmaz.
        </p>
      </article>
    </main>
  );
};

export default Iletisim;
