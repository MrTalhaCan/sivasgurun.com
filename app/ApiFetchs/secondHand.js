import * as cheerio from "cheerio";
import puppeteer from 'puppeteer';
export default async function SecondHand() {
    /* // sahibinden
    const url = `https://www.sahibinden.com/emlak/sivas-gurun?sorting=date_desc`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);  // new addition
    const results = [];
    $('div.searchResultsRight table.searchResultsTable tr.searchResultsItem').each((i, elem) => {
        if(i == 0 || i > 5) return
        const img = $(elem).find('td.searchResultsLargeThumbnail img').attr('src').text();
        const title = $(elem).find('td.searchResultsTitleValue a').text();
        const price = $(elem).find('td.searchResultsPriceValue span').text();
        const date = $(elem).find('td.searchResultsDateValue span').text();
        const location = $(elem).find('td.searchResultsLocationValue').text();
        results.push({"title": title, "img": img, "price": price, "date": date, "location": location});
    });
    return (
        <table>{results.map(data => <tr><td><img src={data.img} /></td><td>{data.title}</td><td>{data.price}</td><td>{data.date}</td><td>{data.location}</td></tr>)}</table>
    ); */
    const products  =   (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // Navigate the page to a URL.
    await page.goto('https://www.letgo.com/gurun_g5000768?city_id=4000070&district_id=5000768', { waitUntil: 'networkidle0' });
    const getThemAllEl  =   await page.$$('._cardContainer_y37l9_1')
    
    
    const allData = getThemAllEl.map(async data => {
        const tags  =   await data.evaluate(el => el.innerHTML)
        return tags.toString()
    })
    await browser.close()
    return allData
    })()
    
    const ary = await products.then(data => {
        return  Promise.all(data.map(async element => {
            return element.then(reslt => reslt)
        }))
    })
    const letgo =   'https://www.letgo.com';
    const valAry = ary.map(data => {
        const $ = cheerio.load(data);
        const link = $('a').attr('href');
        const img = $('._cardContainerSpliter_y37l9_9 img').attr('src');
        const price = $('a._cardContainerSpliter_y37l9_9 span._itemPrice_y37l9_91').text();
        const title = $('._cardContainerSpliter_y37l9_9 span._itemTitle_y37l9_106').text();
        const location = $('._cardContainerSpliter_y37l9_9 div._itemLocationAndHistoryContainer_y37l9_118 span:first-child').text();
        const dateInf = $('._cardContainerSpliter_y37l9_9 div._itemLocationAndHistoryContainer_y37l9_118 span:last-child').text();
        return {prodImg: img, prodPrice: price, prodTitle: title, prodDate: dateInf, prodLocation: location, prodLink: link}
    })
    return (
        <div className="flex flex-wrap gap-y-8 items-center divide-solid sm:divide-none divide-y divide-slate-400">{valAry.map((prod, i) => <div className="w-full p-3 sm:w-1/3 md:w-1/4 xl:w-1/3" key={i}>
            <a href={`${letgo}${prod.prodLink}`} target="_blank">
                <div className="flex flex-col gap-2">
                    <div className="w-full h-80"><img className="w-full object-contain sm:object-cover h-full" src={prod.prodImg} alt={prod.prodTitle} /></div>
                    <div className="w-full flex flex-col h-24 justify-between">
                        <div className="text-center font-bold">{prod.prodPrice}</div>
                        <div className="text-center line-clamp-2">{prod.prodTitle}</div>
                        <div className="w-full flex justify-around text-slate-400 text-sm">
                            <div className="">{prod.prodLocation}</div>
                            <div className="">{prod.prodDate}</div>
                        </div>
                    </div>
                </div>
            </a>
        </div>)}</div>
    );
}