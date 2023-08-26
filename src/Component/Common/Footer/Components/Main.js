import React from "react";
import './Style.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Main = () => {
    return(
        <>
        <div className="max-width header">
            <h1 className="header-logo">ZwiGato</h1>
            <br/>
            <br/>
        </div>
        <div>
                <ul className="max-width navigation-menu">
                    <li>
                        <Link to="/about">About ZwiGato</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>
                </ul>
            </div>
        <hr className="max-width" />
        <br/>
        <div className="absolute-center">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
        </div>
        <div className="absolute-center">        
            <h5>All Rights Reserved &copy; ZwiGato</h5>
        </div>
        </>
    )
}

export default Main;
