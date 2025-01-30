import React, { FC, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { CartDish, DishObject } from '@/types/dish';
import Button, { buttonState } from './UI/Button';
import styles from '../styles/Cart/Cart.module.scss';
import { getCart, addToCart } from '@/hooks/cartUtils';
import { fetchCart, removeFromCart } from '@/hooks/serverCartUtils';
import { useRouter } from 'next/router';

interface CartProps {
    isOpenModal: boolean;
    isOrder?: boolean;
    cart?: DishObject[]
    index?: number
}

const Cart: FC<CartProps> = ({ isOpenModal, isOrder = false, cart }) => {
    const [newDishes, setnewDishes] = useState<DishObject[]>(cart ? cart : []);
    const [isVisible, setIsVisible] = useState(false);
    const [counter, setCounter] = useState(0)
    const [width, setWidth] = useState <number>(1440)
    const router = useRouter()

    const updateCart = () => {
        const localCart = getCart().dishes;
        setnewDishes(localCart);
    };

    useEffect(() => {
        const syncCartPeriodically = async () => {
            const token = localStorage.getItem('jwtToken');
            if(!cart){
                if (token) {
                    try {
                        const serverCart = await fetchCart(token);
                        setnewDishes(serverCart.dishes);
                    } catch (error) {
                        console.error('Ошибка при периодической загрузке корзины:', error);
                    }
                } else {
                    setnewDishes(getCart().dishes);
                }
            }
        };
    
        const interval = setInterval(syncCartPeriodically, 2500); // Обновление каждые 5 секунд
    
        return () => {
            clearInterval(interval); // Очистка интервала при размонтировании
        };
    }, []);
      
      const handleRemove = async (dishId: number) => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          try {
            await removeFromCart(token, String(dishId));
          } catch (error) {
            console.error('Ошибка при удалении блюда:', error);
          }
        }
      
        const updatedDishes = newDishes.filter((item) => item.dish._id !== dishId);
        setnewDishes(updatedDishes);
        localStorage.setItem('cart', JSON.stringify({ dishes: updatedDishes, isDelive: false }));
      };
      
      useEffect(() => {
              setWidth(window.innerWidth)
              addEventListener("resize", (event) => {setWidth(window.innerWidth)});
        
          }, [])

    useEffect(() => {
        if (isOpenModal) {
            setIsVisible(true); // Показываем корзину
        } else {
            setTimeout(() => setIsVisible(false), 500); // Ждем завершения анимации исчезновения
        }
    }, [isOpenModal]);

    useEffect(() => {
    //   const getDishes = async () => {
    //     const token = localStorage.getItem("jwtToken");
    //     console.log(token)
    //     if (!token) {
    //         const localCart = getCart().dishes;
    //         setnewDishes(localCart);
    //     }
    //     else{
    //         const dishes = await fetchCart(token)
    //         setnewDishes(dishes.dishes)
    //     }
    //   }
      if(counter === 0){
        // getDishes()
        setCounter(1)
      }
      
    }, []);

    const handleUpdateQuantity = (dishId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            handleRemove(dishId);
            return;
        }

        const updatedDishes = newDishes.map((item) =>
            item.dish._id === dishId ? { ...item, quantity: newQuantity } : item
        );

        setnewDishes(updatedDishes);
        localStorage.setItem(
            'cart',
            JSON.stringify({ dishes: updatedDishes, isDelive: false })
        );
    };

    if (!isVisible) return null;

    return (
        // 
        <div className={`${isOrder ? styles.Cart_order : styles.Cart} ${isOpenModal ? styles.show : styles.hide}`}>
            {!isOrder && (<h2 className={styles.Cart_title}>Корзина</h2>)}
            <div className={styles.Cart_scroll_text}>
                {newDishes.length === 0 ? (
                    <p>Ваша корзина пуста</p>
                ) : (
                    newDishes.map((item, index) => (
                        <CartItem
                            isOrder={isOrder}
                            key={index}
                            item={item}
                            onUpdateQuantity={handleUpdateQuantity}
                            onRemove={handleRemove}
                        />
                    ))
                )}
            </div>
            <div className={styles.Cart_botBlock}>
                <h3>
                    {newDishes.length === 0 ? (
                        <div>0 товаров</div>
                    ) : (
                        <div>
                            {newDishes.length}{" "}
                            {newDishes.length > 1 ? "товара" : "товар"}
                        </div>
                    )}
                </h3>
                <div className={styles.Cart_botBlock_sum}>
                    <h2>Общая сумма:</h2>
                    <h4>
                        {newDishes.reduce(
                            (total, item) => total + item.dish.price * item.quantity,
                            0
                        )}{" "}
                        руб
                    </h4>
                </div>
                {!isOrder && (
                    <Button
                    state={buttonState.active}
                    width={width > 1520 ? 547 : width > 1440 ? 430 : 400}
                    height={width > 1440 ? 75 : 55}
                    fz={width > 1520 ? '' : width > 1440 ? '28px' : '26px'}
                    styless={{ margin: "0px auto", marginTop: "20px"}}
                    onClickBut={() => router.push('/orderPage')}
                >
                    Оформить заказ
                </Button>)}
            </div>
        </div>
    );
};

export default Cart;
