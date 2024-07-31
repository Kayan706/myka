import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bg8 from './img/bg8.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage:
              `url(${bg8})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            ООО «ТД МТК»
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Наша Миссия
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             Служить сердцем пищевой промышленности, предоставляя высококачественные, экологически чистые продукты для каждого стола.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            О Нас
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            <p className='mtk'>ООО «ТД МТК»</p>- наша компания занимается продажей сахара и муки.<br/> Мы гордимся тем, что
            предлагаем продукцию, выращенную на лучших землях и 
            переработанную с использованием передовых технологий.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
           Наши Продукты
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            Мука Премиум Класса: Идеально подходит для выпечки, пиццы и других кулинарных изделий.<br/>
            Кристаллический сахар: отборный сахар, который добавит сладость в каждый дом.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
