import { Map, Polygon, Placemark, YMaps } from '@pbe/react-yandex-maps';
import React, { FC, useEffect, useState } from 'react';
import styles from './Map.module.scss';
import ModalWindow from '../UI/ModalWindow';

interface MapYandexProps {
    isOpen: boolean;
    setIsOpen: () => void;
}

const MapYandex: FC<MapYandexProps> = ({ isOpen, setIsOpen }) => {
    const [width, setWidth] = useState<number>(1440);

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Координаты полигона (Темрюк)
    const polygonCoordinates = [
        [45.297491, 37.364685],
        [45.302576, 37.345564],
        [45.288297, 37.330629], 
        [45.284279, 37.343287],
        [45.268109, 37.341992],
        [45.252174, 37.356945],
        [45.259472, 37.377011],
        [45.257290, 37.382890],
        [45.260745, 37.398855],
        [45.209804, 37.478162],
        [45.211382, 37.483999],
        [45.204071, 37.499920],
        [45.238767, 37.524983],
        [45.250166, 37.490650],
        [45.259381, 37.486702],
        [45.264230, 37.477089],
        [45.264351, 37.462841],
        [45.266049, 37.450653],
        [45.267776, 37.447735],
        [45.267503, 37.438551],
        [45.268278, 37.430121],
        [45.295188, 37.394635],
        [45.305728, 37.373177]
    ];

    return (
        <YMaps>
            <ModalWindow width={1000} isOpen={isOpen} onClose={setIsOpen}>
                <h2 style={{ paddingBottom: '15px' }}>ул. 27 Сентября, 8/3к3, Темрюк</h2>
                <div className={styles.mapCont}>
                    <Map
                        width={width}
                        height={
                            width > 1800
                                ? width / 3
                                : width > 900
                                ? width / 2
                                : width > 450
                                ? width
                                : width * 2
                        }
                        defaultState={{
                            center: [45.262025, 37.442259], 
                            zoom: 13, 
                        }}
                    >
                        {/* Метка на центре карты */}
                        <Placemark
                            options={{ iconColor: '#FF0000' }}
                            geometry={[45.262025, 37.442259]}
                        />

                        {/* Полупрозрачный фиолетовый полигон */}
                        <Polygon 
                            geometry={[polygonCoordinates]}
                            options={{
                                fillColor: 'rgba(128, 0, 128, 0.1)', // Полупрозрачный фиолетовый цвет
                                strokeColor: '#800080', // Граница полигона фиолетовая
                                strokeWidth: 2
                            }}
                        />
                    </Map>
                </div>
            </ModalWindow>
        </YMaps>
    );
};

export default MapYandex;
