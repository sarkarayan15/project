import React from "react";
import Filters from "../Common/Filters/Index";
import './delivery.css'
import DeliveryCollection from "./DeliveryCollection/Index";
import TopBrands from "./DeliveryCollection/TopBrands/Index";

const deliveryFilters = [
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
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>, 
    },
    {
        id: 6,
        title: "Great Offers",
    },
];


const Delivery = () => {
    return(
        <div>
            <div className="max-width">
            <Filters filterList={deliveryFilters} />
            </div>
            <DeliveryCollection />
            <TopBrands />
        </div>
    )
}

export default Delivery;