export const metadata = {
  title: "Sivas Gürün - Oto Çekici & Kurtarma",
  description: "Sivas Gürün'de 7/24 hizmet veren çekici ve oto kurtarma firmalarının telefon numaraları ve iletişim bilgileri. Acil yol yardımı için en yakın çekiciye hemen ulaşın. Gürün Oto Kurtarma, Garaj Oto kurtarma ve Yiğit oto hizmet verenlerden bazıları.",
};
export default async function Cekici() {	
  return (
    <main>
	<article className="max-w-sm m-auto my-20 p-2">
		<h1 className="text-textLight dark:text-textDark text-3xl tracking-wide">Gürün Oto Kurtarma & Çekici İletişim Bilgileri</h1>
		<ul className="text-textLight dark:text-textDark text-xl tracking-wide p-2">
		  <li className="py-2">Gürün Oto Kurtarma<ul className="px-2 text-sm"><li>tel: +90 (346) 7151363</li><li>cep: +90 537 440 91 58</li><li>cep2: +90 554 565 22 44</li></ul></li>
		  <li className="py-2">Garaj Oto Kurtarma<ul className="px-2 text-sm"><li>cep: +90 541 883 17 83</li></ul></li>
		  <li className="py-2">Yiğit Oto<ul className="px-2 text-sm"><li>cep: +90 536 337 41 58</li></ul></li>
		</ul>
	</article>
</main>
  );
}
