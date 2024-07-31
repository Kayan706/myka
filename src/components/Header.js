import React from 'react';
import phone from './img/phone.png';
import logo from './img/logo.png';

export default function Header() {
  return (
    <header><div className='header'>
            
            <img src={logo} width={50} height={50} />
            <nav className='navigator'>
                <p>ПРОДУКЦИЯ</p>
                <p>ДОСТАВКА</p>
                <p>О КОМПАНИИ</p>
                <p>КОНТАКТЫ</p>
            </nav>
            <img src={phone} width={40} height={40} className=''/>
        </div>
        </header>
  )
}
