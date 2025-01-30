import React, { CSSProperties, FC, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICategoria } from '@/types/categoria';
import CategoriesItem from './CategoriesItem';
import styles from '../styles/Categories/list/list.module.scss';

interface CategoriesListProps {
    categories: ICategoria[];
    styless?: CSSProperties;
}

const CategoriesList: FC<CategoriesListProps> = ({ categories, styless }) => {
    const [slidesToShow, setSlidesToShow] = useState<number>(6);

    useEffect(() => {
        // Функция для расчёта количества видимых слайдов
        const updateSlidesToShow = () => {
            const width = window.innerWidth;
            if (width >= 1300) {
                setSlidesToShow(6);
            } else if (width >= 1120) {
                setSlidesToShow(5);
            } else if (width >= 940) {
                setSlidesToShow(4);
            } else if (width >= 760) {
                setSlidesToShow(3);
            } else if (width >= 580) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1);
            }
        };

        // Устанавливаем начальное значение
        updateSlidesToShow();

        // Добавляем обработчик изменения размера окна
        window.addEventListener('resize', updateSlidesToShow);

        // Очищаем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    return (
        <div style={styless} className={styles.CategoriesList}>
            <Swiper
                
                slidesPerView={slidesToShow}
                spaceBetween={47}
                centeredSlides={false}
                loop={false}
                modules={[Pagination]}
                className="mySwiper"
            >
                {categories.map((item: ICategoria, index) =>
                    item.picture ? (
                        <SwiperSlide key={index} style={{ opacity: 1 }}>
                            <CategoriesItem item={item} />
                        </SwiperSlide>
                    ) : null
                )}
            </Swiper>
        </div>
    );
};

export default CategoriesList;
