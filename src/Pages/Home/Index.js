import React, { useState } from 'react'
import Footer from '../../Component/Common/Footer/Index';
import Header from '../../Component/Common/Header/Index';
import Tabsection from '../../Component/Common/Tabsection/Index';
import Delivery from '../../Component/Delivery/Index';
import DiningOut from '../../Component/DiningOut/Index';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("");
    
    return(
        <div>
            <Header />
            <Tabsection activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

const getCorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />
        case "DiningOut":
            return <DiningOut />
        default:
            return <Delivery />
    }
}

export default HomePage;