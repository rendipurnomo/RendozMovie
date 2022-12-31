import React from 'react'
import Autenticated from "@/Layouts/Autenticated";
import Flickity from 'react-flickity-component';
import {Head} from '@inertiajs/inertia-react';
import FeaturedMovie from "@/Components/FeaturedMovie";
import Moviecard from "@/Components/Moviecard";

export default function Dashboard(){
    const flickityOptions = {
        "cellAlign": "left",
                "contain": true,
                "groupCells": 1,
                "wrapAround": false,
                "pageDots": false,
                "prevNextButtons": false,
                "draggable": ">1",
    }
    return (<Autenticated>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css" />
        <title>Dashboard</title>
        </Head>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[24px]" options={flickityOptions}>
                            {[1,2,3,4].map((i)=>(
                        <FeaturedMovie 
                        key={i}
                        slug="the-batman-in-love"
                        name={`Batman in love ${i}`}
                        category="Sinetron" 
                        thumbnail="https://picsum.photos/id/1/300/300"
                        rating= {i+1}
                        />
                            ))}
                    </Flickity>
                        {/* Browser */}
                        <div className="mt-8">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-6" options={flickityOptions}>
                        {[1,2,3,4,5,6].map((i)=>(
                        <Moviecard key={i}
                        slug="garfile-movie"
                        name={`Garfile ${i}`}
                        category="comedy" 
                        thumbnail="https://picsum.photos/id/1/300/300"
                        />
                        ))}
                    </Flickity>
                </div>
    </Autenticated>
    )
}