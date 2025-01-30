import React, { FC, useEffect, useState } from "react";
import styles from "../styles/DishModal/DishModal.module.scss";
import { IDish } from "@/types/dish";
import { AppURL } from "@/layouts/MainLayout";
import Button, { buttonState } from "./UI/Button";
import { addToCart, getCart } from "@/hooks/cartUtils";
import { useDispatch } from "react-redux";
import { setCartCounter } from "@/store/actions-creators/cart";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "@/store/reducers";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface DishModalProps {
    item: IDish;
    onClose: () => void; // Добавляем пропс для закрытия модального окна
}

const DishModal: FC<DishModalProps> = ({ item, onClose }) => {
    type AppDispatch = ThunkDispatch<RootState, void, any>; 
    const dispatch: AppDispatch = useDispatch();
    const { isAddCart } = useTypedSelector(state => state.cart);

    const [width, setWidth] = useState <number>(1440)
    const handleAddToCart = async () => {
        const token = localStorage.getItem("jwtToken"); // Проверка токена в localStorage
        console.log("JWT Token:", token);
        
        if (token) {
            try {
                const response = await fetch(`${AppURL}/cart`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        DishId: item._id, // Добавляем DishId в тело запроса
                    }),
                });

                if (!response.ok) {
                    throw new Error("Failed to add dish to cart");
                }

                const data = await response.json();
                console.log("Dish added to cart:", data);

                onClose(); // Закрываем модальное окно после успешного запроса
            } catch (error) {
                console.error("Error adding dish to cart:", error);
            }
        } else {
            addToCart(item)
            console.log(getCart())
            onClose();
        }
        dispatch(setCartCounter(isAddCart + 1))
    };
 useEffect(() => {
        setWidth(window.innerWidth)
        addEventListener("resize", (event) => {setWidth(window.innerWidth)});

    }, [])
    return (
        <div className={styles.dishModal}>
            <div className={styles.dishModal_image}>
                <img src={`${AppURL}/${item.picture}`} alt={item.name} />
            </div>
            <div className={styles.dishModal_main}>
                <div className={styles.dishModal_main_title}>
                    <h4 className={styles.dishModal_main_subTitle}>Пицца</h4>
                    <h1>{item.name}</h1>
                </div>
                <div className={styles.dishModal_main_description}>
                    <h4 className={styles.dishModal_main_subTitle}>Описание</h4>
                    <h2 className={styles.dishModal_main_text}>{item.description}</h2>
                </div>
                <div className={styles.dishModal_main_weight}>
                    <h4 className={styles.dishModal_main_subTitle}>Вес</h4>
                    <h2 className={styles.dishModal_main_text}>{item.weight}</h2>
                </div>
                <Button
                    state={buttonState.active}
                    width={420}
                    height={width > 1000 ? 68 : width > 500 ? 48 : 40}
                    fz={width > 1440 ? '' : width > 1000 ? '23px' : width > 500 ? '16px' : '14px'}
                    styless={{
                        marginTop: width > 1440 ? "250px" : width > 1440 ? '50px' : '20px',
                        marginLeft: "auto",
                        marginRight: "auto",
                        
                    }}
                    onClickBut={handleAddToCart}
                >
                    В корзину за {item.price} руб
                </Button>
            </div>
        </div>
    );
};

export default DishModal;
