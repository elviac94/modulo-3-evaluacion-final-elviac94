import React from 'react';
import HeaderLogo from '../images/Rick_and_Morty_-_logo_(English).png';

const Header=()=>{
    return(
        <div className="header__container">
            <img className="header-img" src={HeaderLogo} alt="header-logo" title="header-logo"/>
        </div>
    )
}
export default Header;