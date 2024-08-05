import React from 'react'
import car from './img/car.png'

export default function Delivery() {
  return (
    <section id='delivery' className='delivery'>
        <div className='deliveryhead'>
            <h2>ДОСТАВКА</h2>
        </div>
        <div className='deliveryinfo'>
            <img src={car} width={478} height={412}/>
            <ul className='deliveryinfotext'>
                <li>Доставка сахара, муки по Москве и Московской области <br/>осуществляется ежедневно.</li>
                <li>Автомобили грузоподъемностью от 10 до 20 тонн.</li>
                <li>По Москве осуществляем поставки вплоть до <br/> Садового Кольца не въезжая на Садовое Кольцо.</li>
                <li>Мы используем только собственный транспорт.</li>
                <li>Минимальный объем поставки 3 тонны.</li>
            </ul>
            
        </div>
        <div className='work'><p>ЕЖЕДНЕВНО, ВКЛЮЧАЯ ВЫХОДНЫЕ</p><br/> <p className='textorange'>С 8:00 ДО 21:00</p></div>
</section>
  )
}
