import React, { FC, useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import DishCard from './DishCard';
import { ICategoria } from '@/types/categoria';
import { IDish } from '@/types/dish';
import { AppURL } from '@/layouts/MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/DishCard/DishCard.module.scss';
import MainContainer from './MainContainer';
import Title from './UI/title';

interface DishesCategoriesItemProps {
    categoria: ICategoria;
    over: boolean;
}

const DishesCategoriesItem: FC<DishesCategoriesItemProps> = ({ categoria, over }) => {
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [sets, setSets] = useState<IDish[]>([]);
    const [width, setWidth] = useState<number>(1000);

    useEffect(() => {
        setWidth(window.innerWidth);

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const fetchDishes = async () => {
            try {
                const response = await axios.get(`${AppURL}/dishes/categories/${categoria._id}`);
                setDishes(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        const fetchSets = async () => {
            try {
                const response = await axios.get(`${AppURL}/sets/`);
                setSets(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        if (over) {
            fetchSets();
        }
        fetchDishes();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [categoria._id, over]);

    const renderRows = (items: IDish[], chunkSize: number): JSX.Element[] => {
        const rows: JSX.Element[] = [];

        for (let i = 0; i < items.length; i += chunkSize) {
            let chunk: (IDish | null)[] = items.slice(i, i + chunkSize);

            // Добавление пустых элементов для заполнения
            while (chunk.length < chunkSize) {
                chunk.push(null);
            }

            rows.push(
                <div className={styles.rowBlock} key={i}>
                    <Row className="mb-3">
                        {chunk.map((item, index) => (
                            <Col key={index} md={12 / chunkSize}>
                                {item ? (
                                    <DishCard dish={item} />
                                ) : (
                                    <div className={styles.placeholder}></div>
                                )}
                            </Col>
                        ))}
                    </Row>
                </div>
            );
        }

        return rows;
    };

    const chunkSize = width > 1000 ? 3 : width > 610 ? 2 : 2; // Количество колонок

    // Убедимся, что есть хотя бы одно блюдо или сет для рендеринга
    if (dishes.length === 0 && sets.length === 0) {
        return null; // Не рендерим компонент, если нет блюд и сетов
    }

    return (
        <MainContainer styless={{ marginTop: '85px' }}>
            <Title>{!over ? categoria.name : 'Сеты'}</Title>
            <Container fluid>
                {renderRows(dishes, chunkSize)}
                {over && renderRows(sets, chunkSize)}
            </Container>
        </MainContainer>
    );
};

export default DishesCategoriesItem;
