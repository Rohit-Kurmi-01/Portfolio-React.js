import React from 'react'
import Home from './Home'


function Header() {
    return (
        <>
        <header class="header">
        <a href="#" class="logo">Portfolio</a>
        <i class="fa-solid fa-bars" id="menu-icon">
            <a href="#home" class="active"></a>
            
        </i>

        <nav class="navbar" click_event>
            <a href="#home" class="active">Home</a>
            <a href="#about" class="active">About</a>
            <a href="#skill" class="active">Skills</a>
            <a href="#services"  class="active">Services</a>
            <a href="#portfolio" class="active">Portfolio</a>
            <a href="#contact" class="active">Contact</a>
        </nav>
    </header>
   
    </>
    )
}

export default Header
