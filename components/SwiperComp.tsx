import React, { FC, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperItem from './SwiperItem';
import { IStock } from '@/types/stock';

interface SwiperCompProps {
  stocks: IStock[]
}


const SwiperComp:FC<SwiperCompProps> = ({stocks}) => {
  const [width, setWidth] = useState <number>(1440)
  useEffect(() => {
          setWidth(window.innerWidth)
          addEventListener("resize", (event) => {setWidth(window.innerWidth)});
  
      }, [])
  if(width < 700) return <></>
  return (
    <div style={{ marginTop: '36px' }}>
      <Swiper
        slidesPerView={2} // Показывать 3 слайда одновременно
        spaceBetween={80} // Расстояние между слайдами
        centeredSlides={true} // Центральный слайд
        loop={true} // Включить бесконечный цикл   
        autoplay={{
          delay: 4000, // Задержка между слайдами
          disableOnInteraction: false, // Не останавливать на взаимодействии
        }}
        pagination={{
          clickable: true, // Добавить точки для навигации
        }}
        modules={[Pagination, Autoplay, Navigation]} // Модули Swiper
        className="mySwiper"
      >
        {stocks
          .map((item, index) => (
            <SwiperSlide key={index}>
              <SwiperItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
     
    </div>
  );
};

export default SwiperComp;
