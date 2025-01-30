import { IDish } from '@/types/dish';
import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/DishCard/DishCard.module.scss'
import { AppURL } from '@/layouts/MainLayout';
import { Modal } from 'react-bootstrap';
import ModalWindow from './UI/ModalWindow';
import DishModal from './DishModal';

interface DishCardProps {
    dish: IDish
}

const DishCard: FC<DishCardProps> = ({ dish }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [width, setWidth] = useState <number>(1440)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

useEffect(() => {
        setWidth(window.innerWidth)
        addEventListener("resize", (event) => {setWidth(window.innerWidth)});

    }, [])
    return (
        <div className={styles.DishCard}>
            {/*  */}
            <ModalWindow order={true} isOpen={isModalOpen} onClose={closeModal}  width={width > 400 ? width - (width / 100 * 30) : width}>
                <DishModal item={dish} onClose={closeModal} /> {/* Передаем функцию закрытия */}
            </ModalWindow>
            <div className={styles.DishCard_imgBlock}>
                <img src={`${AppURL}/${dish.picture}`} alt={dish.name} />
            </div>
            <div className={styles.titleBlock}>
                <h2>{dish.name}</h2>
                {dish.weight ? <h6>{dish.weight} грамм</h6> : <></>}
            </div>
            {dish.description.length > 37 ? (
                <h3>{dish.description.substring(0, 41)}..</h3>
            ) : (
                <h3>{dish.description.substring(0, 41)}</h3>
            )}
            <div className={styles.CardFootBlock}>
                <div className={styles.CardFootBlock__price}>{dish.price} руб</div>
                <span className={styles.CardFootBlock__stick}></span>
                <div className={styles.CardFootBlock__button} onClick={openModal}>
                    Выбрать
                </div>
            </div>
        </div>
    );
};

export default DishCard;
