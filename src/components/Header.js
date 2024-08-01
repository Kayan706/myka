import React from 'react';
import phone from './img/phone.png';
import logo from './img/logo.png';

export default function Header() {
  return (
    <header><div className='header'>
            
            <img src={logo} width={50} height={50} />
            <nav className='navigator'>
                <ul>ПРОДУКЦИЯ</ul>
                <ul>ДОСТАВКА</ul>
                <ul>О КОМПАНИИ</ul>
                <ul>КОНТАКТЫ</ul>
                
            </nav>
            <img src={phone} width={40} height={40} className=''/>
            <div className='burger'>
              <span></span>
            </div>
        </div>

        </header>
  )
}

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigator').classList.toggle('open');
})