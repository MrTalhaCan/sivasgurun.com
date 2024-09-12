import * as mysql from 'mysql'
export default async function SugulVadisi(){
    var pool  = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "password",
        database: "gurunilan",
    });
    const getValleyData = function(){
        return new Promise(function(resolve, reject){
			pool.getConnection((err, con) => {
				if (err) throw err;
				console.log("Connected!");
				var sql = `select * from gurunilan.gezilecekyerler WHERE idgezilecekyerler=2`;
				con.query(
					sql, 
					function(err, rows){                           
						if(rows === undefined){
							reject(new Error("Hata! Veri bulunamadı"));
						}else{
							resolve(rows);
							con.release();
						}
					}
				)
			});
        }
    )}
    const reslt = await getValleyData()
    .then(data => data)
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
    const divParagr =   reslt[0].content.split('.');
    const absAry    =   ['', '', '', '', '', ''];
    const joinParag  =  divParagr.map((parag, i) => {
        if(i < 3){
            absAry[0] += `${divParagr[i]}.`;
        }if(i > 2 && i < 7){
            absAry[1] += `${divParagr[i]}.`;
        }if(i > 6 && i < 9){
            absAry[2] += `${divParagr[i]}.`;
        }if(i > 8 && i < 13){
            absAry[3] += `${divParagr[i]}.`;
        }if(i > 12 && i < divParagr.length - 5){
            absAry[4] += `${divParagr[i]}.`;
        }if(i > divParagr.length - 6 && i < divParagr.length){
            absAry[5] += `${divParagr[i]}.`;
        }
    })
    return(
        <section className='mt-12 max-w-screen-lg w-full mx-auto'>    
        <article className='flex flex-col gap-8'>
            <figure>
                <img className='m-auto rounded-lg shadow-lg shadow-slate-500' src="/sugul.jpg" alt="sugul-vadisi" />
                <figcaption className='text-center'>Gürün, Şuğul Vadisi</figcaption>
            </figure>
            <div className='p-3 text-justify'>
                 <header>
                    <h1 className='text-2xl font-bold'>{reslt[0].title}</h1>
                </header>
            {absAry.map(parag => <p className='py-3 tracking-wide'>{parag}</p>)}
            </div>
        </article>
   </section> 
    )
}