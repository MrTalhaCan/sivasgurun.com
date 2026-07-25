import Image from 'next/image'
export async function BSL() {
	const crown	=	`/crown.png`
	return(
		<table className="w-5/6 m-auto text-textLight dark:text-textDark"><thead><tr><th>Takım</th><th className="text-right">Puan</th></tr></thead><tbody><tr className='text-textLight dark:text-textDark'><td className="float-left flex flex-row items-center gap-1">
		<Image
		className="w-6"
        src={`${crown}`}
        width={24}
        height={24}
        alt="Lider"
      />
		Fenerbahçe</td><td className="text-right">57</td></tr>
<tr className='text-textLight dark:text-textDark'><td className="float-left">Beşiktaş</td><td className="text-right">53</td></tr>
<tr className='text-textLight dark:text-textDark'><td className="float-left">Anadolu Efes</td><td className="text-right">53</td></tr>
<tr className='text-textLight dark:text-textDark'><td className="float-left">Tofaş</td><td className="text-right">49</td></tr>
<tr className='text-textLight dark:text-textDark'><td className="float-left">Bahçeşehir Koleji</td><td className="text-right">48</td></tr>
</tbody></table>
	)
}