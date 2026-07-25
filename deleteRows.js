import { Pool } from "./app/ApiFetchs/pool.js"; // kendi Pool.js dosyanı buraya yaz
// 30 günden eski verileri sil örneği
const [result] = await Pool.query(
  `DELETE FROM trends
ORDER BY idtrends ASC
LIMIT 3;
`
);
console.log(`${result.affectedRows} trends kayıt silindi.`);
const [result2] = await Pool.query(
  `DELETE FROM havadurumu
ORDER BY idhavadurumu ASC
LIMIT 60;
`
);
console.log(`${result2.affectedRows} havadurumu kayıt silindi.`);
