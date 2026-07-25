import {trendsData} from "@/app/ApiFetchs/trends"
export default async function TrendsCard() {
    const trends = await trendsData();
    return (
        <ul className="text-textLight dark:text-textDark">{trends.map((res, i) => {
         if (i > 10) return;
         return <li key={i}># {res}</li>   
        })}</ul>
    );
}