import Cart from '@/components/Cart';
import HeaderMain from '@/components/HeaderMain';
import MainContainer from '@/components/MainContainer';
import Button, { buttonState } from '@/components/UI/Button';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/OrderPage/OrderPage.module.scss';
import { AppURL } from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { clearCart, getCart } from '@/hooks/cartUtils';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Map from '@/components/Maps/Map';
import MapYandex from '@/components/Maps/Map';

const Index = () => {
    const [deliveType, setDeliveType] = useState <boolean>(true);
    const [phoneNumber, setPhoneNumber] = useState <string>('');
    const [adress, setAdress] = useState <string>('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [polit, setPolit] = useState <boolean>(false);
    const [width, setWidth] = useState <number>(1440)
    const [dateTime, setDateTime] = useState('');
    const router = useRouter();

    useEffect(() => {
        setWidth(window.innerWidth)
        addEventListener("resize", (event) => {setWidth(window.innerWidth)});

    }, [])

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("jwtToken");
            if (token) {
                try {
                    const response = await fetch(`${AppURL}/check`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        alert("Failed to fetch user data");
                    }

                    const data = await response.json();
                    setPhoneNumber(data.phone_number);
                    data.adress ? setAdress(data.adress) : '';
                } catch (error) {
                    alert("Error fetching user data:");
                }
            }
        };
        fetchUser();
    }, []);

    const fetchSuggestions = async (query: string) => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token 66c52997f6014158cde2901f25bc5e8660124013`,
                },
                body: JSON.stringify({ query, count: 5 })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch address suggestions');
            }

            const data = await response.json();
            setSuggestions(data.suggestions.map((item: any) => item.value));
        } catch (error) {
            console.error('Error fetching address suggestions:', error);
        }
    };

    const handleAdressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if(value.length < 100){
            setAdress(value);
            fetchSuggestions(value);
        }
        
    };

    const onSuggestionClick = (suggestion: string) => {
        setAdress(suggestion);
        setSuggestions([]);
    };

    const onTypeHandler = (type: boolean) => {
        setDeliveType(type);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleCreateOrder = async () => {
        const token = localStorage.getItem("jwtToken");
        const orderData = {
            phone_number: phoneNumber,
            adress: adress,
            delive: deliveType,
            dateTime: dateTime
        };

        if (token) {
            try {
                const response = await fetch(`${AppURL}/orders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(orderData)
                });

                if (response.status === 201) {
                    router.push('/');
                } else {
                    alert("Failed to create order.");
                }
            } catch (error) {
                console.error("Error creating order:", error);
                alert("Error creating order.");
            }
        } else {
            try {
                const cart = getCart();
                const orderData = {
                    phone_number: phoneNumber,
                    adress: adress,
                    delive: deliveType,
                    cart: cart, // Включаем корзину в запрос
                };
                const response = await fetch(`${AppURL}/orders`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(orderData)
                });

                if (response.status === 200 || response.status === 201) {
                    clearCart();
                    router.push('/');
                } else {
                    alert("Failed to create order.");
                }
            } catch (error) {
                console.error("Error creating order:", error);
                alert("Error creating order.");
            }
        }
    };
    const [isOpen, setIsOpen] = useState <boolean>(false)
    
    return (
        <div className={styles.orderPage}>
            <HeaderMain order={true} onChangeDeliveType={onTypeHandler} />
            <MainContainer styless={{ borderRadius: "17px", background: "rgb(247, 247, 247)", marginTop: '150px' }}>
                {deliveType ? (
                    <div className={styles.orderPage_delive_twoBlocks}>
                        <div className={styles.orderPage_delive_twoBlocks_touched}>
                            <h1 className={styles.orderPageTitle}>Ваш заказ:</h1>
                            <div className={styles.orderPage_input}>
                                <h3 className={styles.orderPage_subTItle}>Номер:*</h3>
                                <input
                                    type="text"
                                    placeholder='+79001112233'
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                            </div>
                            <div className={styles.orderPage_input}>
                                <h3 className={styles.orderPage_subTItle}>Адрес:*</h3>
                                <input
                                    type="text"
                                    value={adress}
                                    onChange={handleAdressChange}
                                />
                               
                            </div>
                            <div className={styles.orderPage_input}>
                                <h3 className={styles.orderPage_subTItle}>На время:</h3>
                                    <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                                </div>
                            {suggestions.length > 0 && (
                                    <ul className={styles.suggestionsList}>
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                onClick={() => onSuggestionClick(suggestion)}
                                                className={styles.suggestionItem}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            <p>
                                Доставим ваш заказ по адресу: <br />
                                {adress}
                            </p>
                            <Button
                                styless={{ marginTop: width > 1440 ? '81px' : width > 1170 ? '41px' : width > 1000 ? '10px' : '30px' }}
                                state={adress && phoneNumber && polit ? buttonState.active : buttonState.disabled}
                                width={width > 1170 ? 547 : 480}
                                height={width > 1170 ? 76 : width > 1000 ? 55 : 45}
                                fz={width > 1170 ? '' : width > 1000 ? '25px' : '20px'}
                                onClickBut={handleCreateOrder}
                            >
                                Оформить заказ
                            </Button>
                            <div className={styles.checkBox_block}>
                                <div className={styles.checkBox} onClick={() => setPolit(!polit)}>
                                    {polit && <div className={styles.checkBox_icon}></div>}
                                </div>
                                <h4>Я ознакомлен с содержанием пользовательского соглашения и принимаю условия обработки персональных данных.</h4>
                            </div>
                        </div>
                        {width > 1000 ?
                        <div className={styles.orderPage_delive_twoBlocks_cart}>
                            <h1 className={styles.orderPageTitle}>Товары:</h1>
                            <div className={styles.cart_container}>
                                <Cart isOpenModal={true} isOrder={true} />
                            </div>
                        </div>
                        :
                        <></>
                        }
                    </div>
                ) : (
                    <div className={styles.orderPage_delive_twoBlocks}>
                        <div className={styles.orderPage_delive_twoBlocks_touched}>
                            <h1 className={styles.orderPageTitle}>Ваш заказ:</h1>
                            <div className={styles.orderPage_input}>
                                <h3 className={styles.orderPage_subTItle}>Номер:*</h3>
                                <input
                                    type="text"
                                    placeholder='+79001112233'
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                />
                            </div>
                            <div className={styles.orderPage_input}>
                                <h3 className={styles.orderPage_subTItle}>На время:</h3>
                                    <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                                </div>
                            {suggestions.length > 0 && (
                                    <ul className={styles.suggestionsList}>
                                        {suggestions.map((suggestion, index) => (
                                            <li
                                                key={index}
                                                onClick={() => onSuggestionClick(suggestion)}
                                                className={styles.suggestionItem}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            <Button
                                styless={{ marginTop: width > 1440 ? '81px' : width > 1170 ? '41px' : width > 1000 ? '10px' : '30px' }}
                                state={buttonState.active}
                                width={width > 1170 ? 547 : 480}
                                height={width > 1170 ? 76 : width > 1000 ? 55 : 45}
                                fz={width > 1170 ? '' : width > 1000 ? '25px' : '20px'}
                                onClickBut={() => setIsOpen(true)}
                            >
                                Мы на карте
                            </Button>
                            <Button
                                styless={{ marginTop: width > 1440 ? '41px' : width > 1170 ? '41px' : width > 1000 ? '10px' : '30px' }}
                                state={phoneNumber && polit ? buttonState.active : buttonState.disabled}
                                width={width > 1170 ? 547 : 480}
                                height={width > 1170 ? 76 : width > 1000 ? 55 : 45}
                                fz={width > 1170 ? '' : width > 1000 ? '25px' : '20px'}
                                onClickBut={handleCreateOrder}
                            >
                                Оформить заказ
                            </Button>
                            <div className={styles.checkBox_block}>
                                <div className={styles.checkBox} onClick={() => setPolit(!polit)}>
                                    {polit && <div className={styles.checkBox_icon}></div>}
                                </div>
                                <h4>Я ознакомлен с содержанием пользовательского соглашения и принимаю условия обработки персональных данных.</h4>
                            </div>
                        </div>
                        {width > 1000 ?
                        <div className={styles.orderPage_delive_twoBlocks_cart}>
                            <h1 className={styles.orderPageTitle}>Товары:</h1>
                            <div className={styles.cart_container}>
                                <Cart isOpenModal={true} isOrder={true} />
                            </div>
                        </div>
                        :
                        <></>
                        }
                    </div>
                )}
                <MapYandex isOpen={isOpen} setIsOpen={() => setIsOpen(false)}/>
            </MainContainer>
        </div>
    );
};

export default Index;
