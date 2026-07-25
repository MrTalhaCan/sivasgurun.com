'use client'
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
export default function PostsClient(prms){
    const [postCount, setPostCount] = useState(6);
    const posts = prms.posts;
	const myDir = prms.othr ? prms.othr : "/yazilar/";
	
    function countHandler(plus){
        setPostCount(val => { if(val <= posts.length){ return val + plus}else{ return val }})
    }
    return (
        <>
        {posts.map((post, i) => <div className="w-full p-3 sm:w-1/3 md:w-1/4 xl:w-1/3" style={ {display: i<postCount ? 'block' : 'none'}} key={i}>
            <Link href={`${myDir}${post.results.link}`}>
                <div className="flex flex-col gap-2">
                    <div className="w-full h-80">
<Image
	className="w-full object-cover sm:object-cover h-full rounded-lg" 
        src={`/${post.results.mainImg}`}
        width={320}
        height={320}
        alt={post.results.title}
      />
</div>
                    <div className="w-full flex flex-col h-28 justify-around">
                        <div className="text-center font-bold text-lg">{post.results.title}</div>
                        <div className="text-center line-clamp-2 dark:text-white">{post.results.entryText}</div>
                    </div>
                </div>
            </Link>
        </div>)}
        { postCount < posts.length && <button className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 text-2xl p-2 rounded mx-auto my-3 text-titleLight" onClick={() => countHandler(Number(3))}>Daha Fazla</button> }
        </>
    )
}