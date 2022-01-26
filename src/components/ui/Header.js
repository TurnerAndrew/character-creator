import React from 'react';

import '../../styles/header.css'

const Header = () => {
  return (
    <header id='header-main'>
        <nav id='main-nav'>
            <ul id='nav-list'>
                {/* <li class='nav-item'>Home</li> */}
                <li class='nav-item'>Race</li>            
                <li class='nav-item'>Class</li>
                <li class='nav-item'>Abilities</li>
                <li class='nav-item'>Background</li>
                <li class='nav-item'>Equipment</li>  
            </ul>
        </nav>
    </header>
  )
};

export default Header;
