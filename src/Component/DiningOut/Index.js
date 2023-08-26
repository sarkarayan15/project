import React from "react";
import Collection from "../Common/Collection/Index";
import Filters from "../Common/Filters/Index";
import './diningout.css'

const collectionList = [
    {
        id: 1,
        title: "8 Newly Opened Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/013ec5a6916eca9567f4169b687b819a_1669618484.jpg",
        places: "8 Places",
    },
    {
        id: 2,
        title: "9 Great Buffets in Town",
        cover: "https://b.zmtcdn.com/data/collections/f6d732dc7432ad6e80a309cce6f0745a_1665640262.jpg",
        places: "9 Places",
    },
    {
        id: 3,
        title: "9 Best Insta-worthy Places",
        cover: "https://b.zmtcdn.com/data/collections/c6446d626ba68217c01d4318cebf4a1d_1665729718.jpg",
        places: "9 Places",
    },
    {
        id: 4,
        title: "8 Places for Lip-smacking Fish",
        cover: "https://b.zmtcdn.com/data/collections/4357cc5382783a70c00a33c1c5cc2ed6_1665728005.jpg",
        places: "8 Places",
    },
    {
        id: 5,
        title: "11 Serene Rooftop Places",
        cover: "https://b.zmtcdn.com/data/collections/3dfd3a9082b04d661891abd003eef3eb_1666068271.jpg",
        places: "11 Places",
    },
    {
        id: 6,
        title: "14 Must-visit Legendary Places in",
        cover: "https://b.zmtcdn.com/data/collections/32d2fdf2536f92ce9dec7b3789749f1f_1665753956.jpg",
        places: "14 Places",
    },
];

const diningFilters = [
    {
        id: 1,
        icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating 4.0+",
    },
    {
        id: 3,
        title: "Pure Veg",
    }, 
    {
        id: 4,
        title: "Non Veg",
    },
    {
        id: 4,
        title: "Dining Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>, 
    },
    {
        id: 6,
        title: "Great Offers",
    },
];

const DiningOut = () => {
    return(
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={diningFilters} />
            </div>
        </div>
    )
}

export default DiningOut;