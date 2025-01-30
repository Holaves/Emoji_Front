import React, { FC, useState } from 'react';
import Marquee from './UI/Marquee';
import MainContainer from './MainContainer';
import { Col, Row } from 'react-bootstrap';
import styles from '../styles/Footer/Footer.module.scss'
import Link from 'next/link';
import { useRouter } from 'next/router';
import MapYandex from './Maps/Map';
import ModalWindow from './UI/ModalWindow';

const Footer:FC = () => {
    const router = useRouter()
        const [isOpen, setIsOpen] = useState <boolean>(false)
        const [isOpenWorkTime, setIsOpenWorkTime] = useState <boolean>(false)
   return(
       <div className={styles.Footer}>
            <Marquee text='#ДАРИЭМОДЗИ' speed={250}></Marquee>
            <MainContainer>
                <Row>
                    <Col>
                        <ul className={styles.Footer_list}>
                            <li className={styles.Footer_subTitle}>Эмодзи</li>
                            <li><Link style={{textDecoration: 'none', color: 'rgb(194, 193, 193)'}}href="/AboutUs">О нас</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'rgb(194, 193, 193)'}} href="https://yandex.ru/maps/org/emodzi/5950025613/reviews/?ll=37.442145%2C45.262077&tab=reviews&z=17.4">Отзывы</Link></li>
                            <li ><Link style={{textDecoration: 'none', color: 'rgb(194, 193, 193)'}}href="/#anchor_two">Меню</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className={styles.Footer_list}>
                            <li className={styles.Footer_subTitle}>Контакты</li>
                            <li><Link style={{textDecoration: 'none', color: 'rgb(194, 193, 193)'}} href={'https://vk.com/emojer27'}>Вконтакте</Link></li>
                            <li>Ватцап</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className={styles.Footer_list}>
                            <li className={styles.Footer_subTitle}>Правовая информация</li>
                            <li onClick={() => router.push('/privacy')}>Политика конфиденциальности</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul className={styles.Footer_list}>
                            <li className={styles.Footer_subTitle}>Доп информация</li>
                            <li onClick={() => setIsOpen(true)}>Адресс</li>
                            <li onClick={() => setIsOpenWorkTime(true)}>График работы</li>
                            <ModalWindow onClose={() => setIsOpenWorkTime(false)} isOpen={isOpenWorkTime}>
                                <h2 className={styles.day_title}>
                                    График работы
                                </h2>
                                <div className={styles.day}>
                                    <h3>Понедельник</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Вторник</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Среда</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Четверг</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Пятница</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Суббота</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                                <div className={styles.day}>
                                    <h3>Воскресенье</h3>
                                    <h3>11:00 – 23:00</h3>
                                </div>
                            </ModalWindow>
                            <li>Группа с розыгрышами</li>
                            
                        </ul>
                    </Col>
                </Row>
                <div className={styles.Footer_contacts}>
                    <h2>+7(900)000-00-00</h2>
                    <h3>Emoji@gmail.com</h3>
                </div>
                <span className={styles.line_f} ></span>
                <div className={styles.Footer_bot}>
                    <h3>© 2024 ООО “Эмодзи”
ОГРН 000000000000, ИНН 111111111111
7777 Краснодарский край, г. Темрюк, Ленина , д. 16</h3>
                    <div className={styles.Footer_logos}>
                        <div className={styles.logoFull}></div>
                        <div className={styles.f_two}>
                            <div className={styles.watc}></div>
                            <Link href={'https://vk.com/emojer27'}><div className={styles.vk}></div></Link>
                        </div>
                    </div>
                </div>
                <MapYandex isOpen={isOpen} setIsOpen={() => setIsOpen(false)}/>
            </MainContainer>
       </div>
   );
};


export default Footer;