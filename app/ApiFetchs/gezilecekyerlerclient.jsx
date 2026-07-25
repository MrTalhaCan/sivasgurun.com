'use client'
import { useState } from "react";
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function GezilecekyerlerClient(prms){
    const [postCount, setPostCount] = useState(6);
    const posts = prms.posts;
const pathname = usePathname();
    function countHandler(plus){
        setPostCount(val => { if(val <= posts.length){ return val + plus}else{ return val }})
    }
    return (
        <>
        {posts.map((post, i) => <div className="w-full max-w-lg p-3" style={ {display: i<postCount ? 'block' : 'none'}} key={i}>
            <a href={`${pathname}/${post.content.link}`}>
                <div className="flex flex-col gap-2">
                    <div className="w-full h-80">
<Image
	className="w-full object-cover sm:object-cover h-full rounded-lg" 
        src={`/${post.content.mainImg}`}
        width={320}
        height={320}
        alt={post.content.title}
      />
</div>
                    <div className="w-full flex flex-col h-28 justify-around">
                        <div className="text-center font-bold text-lg dark:text-titleDark text-textLight">{post.content.mainTitle}</div>
                        <div className="text-center line-clamp-2 dark:text-titleDark text-textLight">{post.content.entryText}</div>
                    </div>
                </div>
            </a>
        </div>)}
        { postCount < posts.length && <button className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-2xl p-2 rounded mx-auto my-3 text-titleLight" onClick={() => countHandler(Number(3))}>Daha Fazla</button> }
        </>
    )
}