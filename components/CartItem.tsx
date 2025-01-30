import { DishObject } from "@/types/dish";
import React, { FC, useEffect, useState } from "react";
import styles from "../styles/CartItem/CartItem.module.scss";
import { AppURL } from "@/layouts/MainLayout";
import { decrementDishQuantity, incrementDishQuantity } from "@/hooks/serverCartUtils";



interface CartItemProps {
  item: DishObject; // Используем DishObject, который содержит dish и quantity
  onUpdateQuantity: (dishId: number, newQuantity: number) => void;
  onRemove: (dishId: number) => void;
  isOrder?: boolean;
}

const CartItem: FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove, isOrder = false }) => {
  const [counter, setCounter] = useState<number>(item.quantity);

  const handleDecrement = async () => {
    if (counter > 1) {
      const newQuantity = counter - 1;
      setCounter(newQuantity);
      onUpdateQuantity(item.dish._id, newQuantity);
  
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          await decrementDishQuantity(token, String(item.dish._id));
        } catch (error) {
          console.error('Ошибка при уменьшении количества:', error);
        }
      }
    } else {
      handleRemove();
    }
  };
  
  const handleIncrement = async () => {
    const newQuantity = counter + 1;
    setCounter(newQuantity);
    onUpdateQuantity(item.dish._id, newQuantity);
  
    const token = localStorage.getItem('jwtToken');
    if (token) {
      try {
        await incrementDishQuantity(token, String(item.dish._id));
      } catch (error) {
        console.error('Ошибка при увеличении количества:', error);
      }
    }
  };
  


  const handleRemove = () => {
    onRemove(item.dish._id);
  };

  return (
    <div className={styles.CartItem}>
      <div className={styles.CartItem_wrapper}>
        <div className={styles.CartItem_img_cont}>
          <img src={`${AppURL}/${item.dish.picture}`} alt={item.dish.name} />
        </div>
        <div className={styles.CartItem_block}>
          <div className={styles.CartItem_block_title}>
            <h3>{item.dish.name}</h3>
            <div className={styles.CartItem_Counter} style={isOrder ? {width: '45px'} : {}}>
              {!isOrder && (<div className={styles.decrement} onClick={handleDecrement}>
                <div className={styles.decrement_first}></div>
              </div>)}
              <div className={styles.counter_text} style={isOrder ? {display: 'flex', justifyContent: 'center', width: '100%'} : {}}>{counter}</div>
             {!isOrder && (<div className={styles.increment} onClick={handleIncrement}>
                <div className={styles.increment_first}></div>
                <div className={styles.increment_second}></div>
              </div>)}
            </div>
          </div>
          <h2 className={styles.CartBlock_subTitle}>
            {item.dish.weight} грамм
          </h2>
          <div className={styles.CartBlock_line}></div>
          <div className={styles.CartBlock_bot}>
            <h4 className={styles.CartBlock_price}>
              {item.dish.price * counter} рублей
            </h4>
            {!isOrder ? <div className={styles.dropDish} onClick={handleRemove}></div> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
