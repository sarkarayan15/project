import React from "react";
import Slider from "react-slick";
import NextArrow from "../../../Common/Carousel/nextArrow";
import PrevArrow from "../../../Common/Carousel/prevArrow";
import './TopBrands.css';

const topBrandList = [
    {
        id: 1,
        time: "21 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389253.png",
    },
    {
        id: 2,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252746.png",
    },
    {
        id: 3,
        time: "35 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/560b209a689eefa9feb367b5d5604097_1611382952.png",
    },
    {
        id: 4,
        time: "39 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
    },
    {
        id: 5,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/67fe2ea54f94a7fd5bc27a985c64f0f1_1619104290.png",
    },
    {
        id: 6,
        time: "38 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188103.png",
    },
    {
        id: 7,
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2e53190800c543a69d2a8a579056189e_1581415195.png",
    },
    {
        id: 8,
        time: "38 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7bd8d15b440414feab366ee63b046f5d_1672388843.png",
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
    return(
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
                {topBrandList.map((brand) => {
                    return <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default TopBrands;