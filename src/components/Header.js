import React, { useState } from 'react';
import phone from './img/phone.png';
import logo from './img/logo.png';


export default function Header() {
  const[isOpen, setOpen] = useState();
  
  return (
    <header><div id='header' className='header'>
          
            <a href='#info'><img  src={logo} width={50} height={50}  /></a>
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className='header__nav-list'>
                  <li className={`header__nav-item ${isOpen ? "active" : ""}` } onClick={()=>setOpen(!isOpen)}><a href='#product'>ПРОДУКЦИЯ</a></li>
                  <li className={`header__nav-item ${isOpen ? "active" : ""}` } onClick={()=>setOpen(!isOpen)}><a href='#delivery'>ДОСТАВКА </a></li>
                  <li className={`header__nav-item ${isOpen ? "active" : ""}` } onClick={()=>setOpen(!isOpen)}><a href='#card'>О КОМПАНИИ</a></li>
                  <li className={`header__nav-item ${isOpen ? "active" : ""}` } onClick={()=>setOpen(!isOpen)}><a href='#footer'>КОНТАКТЫ</a></li>
                </ul>
                
                </nav> 
             <a href="tel:+79013494949" ><img src={phone} width={40} height={40} className=''/></a>
            <span className={`header__menu-button ${isOpen ? "active" : ""}`} onClick={()=>setOpen(!isOpen)} ></span>
        </div>

        </header>
  )
}

