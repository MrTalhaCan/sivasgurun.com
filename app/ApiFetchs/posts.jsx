import { Pool } from "./pool";
import PostsClient from "./postsClient";
export default async function Posts() {
    const getPosts = async function(){
        try {
        const sql = `select * from yazilar WHERE region='gürün' AND subregion IS NULL AND idyazilar <> 12 AND kategori='yazi' ORDER BY idyazilar desc`;
        const [rows] = await Pool.query(sql); // Pool.query doğrudan bağlantıyı yönetir!
        return rows;
    } catch (err) {
        console.error("MySQL Error:", err);
        throw err;
    }

    }
    const reslt = await getPosts()
    .then(data => {return data != undefined ? data : []} )
    .catch(function(err){
    console.log("Promise rejection error: "+err);
    })
	const myDir = `/mekanlar/gurun/`;
    return (
        <div className="flex flex-wrap gap-y-8 items-center divide-solid sm:divide-none divide-y divide-slate-400 text-textLight dark:text-textDark"><PostsClient othr={myDir} posts={reslt} /></div>
    );
}