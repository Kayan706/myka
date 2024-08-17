import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <footer id='footer' >
        <div className='footertext'>
          <span>«Все права защищены ©»<br/> «Не является публичной офертой»</span>
          <div className='contact'>
            <a href='tel:+79013494949'><LuPhone />+79013494949</a>
            <a href="mailto:td.mtk@mail.ru"><AiOutlineMail />td.mtk@mail.ru</a>
          </div>
        </div>
    </footer>
  )
}
