import React from 'react'
import Autenticated from "@/Layouts/Autenticated";
import Flickity from 'react-flickity-component';
import {Head} from '@inertiajs/inertia-react';
import FeaturedMovie from "@/Components/FeaturedMovie";
import Moviecard from "@/Components/Moviecard";

export default function Dashboard({auth, featuredMovies, movies}){
    const flickityOptions = {
        "cellAlign": "left",
                "contain": true,
                "groupCells": 1,
                "wrapAround": false,
                "pageDots": false,
                "prevNextButtons": false,
                "draggable": ">1",
    }
    return (<Autenticated auth={auth}>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css" />
        <title>Dashboard</title>
        </Head>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[24px]" options={flickityOptions}>
                            {featuredMovies.map((featuredMovie)=>(
                        <FeaturedMovie 
                        key={featuredMovie.id}
                        slug={featuredMovie.slug}
                        name={featuredMovie.name}
                        category={featuredMovie.category} 
                        thumbnail={featuredMovie.thumbnail}
                        rating= {featuredMovie.rating}
                        />
                            ))}
                    </Flickity>
                        {/* Browser */}
                        <div className="mt-8">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-6" options={flickityOptions}>
                        {movies.map((movie)=>(
                        <Moviecard key={movie.id}
                        slug={movie.slug}
                        name={movie.name}
                        category={movie.category} 
                        thumbnail={movie.thumbnail}
                        />
                        ))}
                    </Flickity>
                </div>
    </Autenticated>
    )
}