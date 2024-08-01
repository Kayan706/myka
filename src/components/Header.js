import React, { useState } from 'react';
import phone from './img/phone.png';
import logo from './img/logo.png';


export default function Header() {
  const[isOpen, setOpen] = useState();

  return (
    <header><div className='header'>
            
            <img src={logo} width={50} height={50} />
            <nav className={`header__nav ${isOpen ? "active" : ""}`}>
                <ul className='header__nav-list'>
                  <li className='header__nav-item'>ПРОДУКЦИЯ</li>
                  <li className='header__nav-item'>ДОСТАВКА</li>
                  <li className='header__nav-item'>О КОМПАНИИ</li>
                  <li className='header__nav-item'>КОНТАКТЫ</li>
                </ul>
                
                </nav> 
            <img src={phone} width={40} height={40} className=''/>
            <span className={`header__menu-button ${isOpen ? "active" : ""}`} onClick={()=>setOpen(!isOpen)}></span>
        </div>

        </header>
  )
}

