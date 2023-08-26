import React from 'react'
import './header.css'

const Header = () => {
    return(
     <>
        <div className='max-width header'>
           <h1 className='header-logo'>ZwiGato</h1> 
        
        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className='location-wrapper'>
                    <div className='location-icon-name'>
                    <i className="fi fi-rr-marker absolute-center location-icon"></i>
                    <div>Kolkata</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className='location-search-separator'></div>
                <div className='header-searchbar'>
                <i className="fi fi-rr-search absolute-center search-icon"></i>
                <input placeholder='search for resturant or a dish'
                className='search-input'
                />
                </div>
            </div>
            <div className='profile-wrapper'>
                <span className='header-username'>Ayan</span>
                <i className="fi fi-rr-angle-small-down absolute-center profile-action-icon"></i>
            </div>
        </div>
        </div>
    </>
    )
}

export default Header;