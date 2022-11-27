import React, { useState } from 'react'
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows';

const HeroCarousel = () => {
    const [images, setImages] = useState([
        {
            "adult": false,
            "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 436270,
            "original_language": "en",
            "original_title": "Black Adam",
            "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
            "popularity": 6828.368,
            "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
            "release_date": "2022-10-19",
            "title": "Black Adam",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 365
        },
        {
            "adult": false,
            "backdrop_path": "/aTovumsNlDjof7YVoU5nW2RHaYn.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 616820,
            "original_language": "en",
            "original_title": "Halloween Ends",
            "overview": "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can’t control, once and for all.",
            "popularity": 5207.887,
            "poster_path": "/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg",
            "release_date": "2022-10-12",
            "title": "Halloween Ends",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 591
        },
        {
            "adult": false,
            "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
            "genre_ids": [
                27,
                53,
                9648
            ],
            "id": 717728,
            "original_language": "en",
            "original_title": "Jeepers Creepers: Reborn",
            "overview": "Forced to travel with her boyfriend to a horror festival, Laine begins to experience disturbing visions associated with the urban legend of The Creeper. As the festival arrives and the blood-soaked entertainment builds to a frenzy, she becomes the center of it while something unearthly has been summoned.",
            "popularity": 6675.288,
            "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
            "release_date": "2022-09-15",
            "title": "Jeepers Creepers: Reborn",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 326
        },
        {
            "adult": false,
            "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 760161,
            "original_language": "en",
            "original_title": "Orphan: First Kill",
            "overview": "After escaping from an Estonian psychiatric facility, Leena Klammer travels to America by impersonating Esther, the missing daughter of a wealthy family. But when her mask starts to slip, she is put against a mother who will protect her family from the murderous “child” at any cost.",
            "popularity": 3787.394,
            "poster_path": "/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg",
            "release_date": "2022-07-27",
            "title": "Orphan: First Kill",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 1092
        },
        {
            "adult": false,
            "backdrop_path": "/1DBDwevWS8OhiT3wqqlW7KGPd6m.jpg",
            "genre_ids": [
                53
            ],
            "id": 985939,
            "original_language": "en",
            "original_title": "Fall",
            "overview": "For best friends Becky and Hunter, life is all about conquering fears and pushing limits. But after they climb 2,000 feet to the top of a remote, abandoned radio tower, they find themselves stranded with no way down. Now Becky and Hunter’s expert climbing skills will be put to the ultimate test as they desperately fight to survive the elements, a lack of supplies, and vertigo-inducing heights",
            "popularity": 3311.749,
            "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
            "release_date": "2022-08-11",
            "title": "Fall",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 1518
        },
        {
            "adult": false,
            "backdrop_path": "/ghsPsvM0sEztdNT4kUlTsBF2LEF.jpg",
            "genre_ids": [
                18,
                28,
                53
            ],
            "id": 852046,
            "original_language": "fr",
            "original_title": "Athena",
            "overview": "Hours after the tragic death of their youngest brother in unexplained circumstances, three siblings have their lives thrown into chaos.",
            "popularity": 2929.919,
            "poster_path": "/fenNPxVF5ERy0CSyVruuEg959Hg.jpg",
            "release_date": "2022-09-09",
            "title": "Athena",
            "video": false,
            "vote_average": 6.6,
            "vote_count": 299
        },
        {
            "adult": false,
            "backdrop_path": "/7AiIrnDMaOhPrw9elJ5NNjijTW4.jpg",
            "genre_ids": [
                53,
                9648
            ],
            "id": 916605,
            "original_language": "en",
            "original_title": "The Infernal Machine",
            "overview": "Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan, forcing the novelist to confront a past that he thought he could escape, and to account for events set in motion by his bestseller decades earlier. Cogburn's search for who is behind the manipulation and mental torment he encounters leads to an emotional roller-coaster ride full of fear and danger, where things are not always as clear as they seem to be, and where past deeds can have dire consequences.",
            "popularity": 2690.371,
            "poster_path": "/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg",
            "release_date": "2022-09-23",
            "title": "The Infernal Machine",
            "video": false,
            "vote_average": 7,
            "vote_count": 91
        }
    ]);

    const settingLG = {
        arrows: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    }

    const settings = {
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        speed: 500,
        slideToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    }

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-56 md:h-80 py-3' key={index}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt="Hero Banner"
                                    className="w-full h-full rounded-md object-cover"
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingLG}>
                    {
                        images.map((image, index) => (
                            <div className='w-full h-96 px-2 py-3' key={index}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                    alt="Hero Banner"
                                    className="w-full h-full rounded-md object-cover"
                                />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>
        </>
    )
}

export default HeroCarousel;