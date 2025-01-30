import { AppURL } from '@/layouts/MainLayout';
import axios from 'axios';

const API_URL = `${AppURL}/cart`; // Базовый URL

// Получить корзину
export const fetchCart = async (token: string) => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Добавить блюдо в корзину
export const addToCart = async (token: string, dishId: string) => {
  const response = await axios.post(
    API_URL,
    { DishID: dishId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Удалить блюдо из корзины
export const removeFromCart = async (token: string, dishId: string) => {
    const response = await axios.delete(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: { DishId: dishId }, // Убедитесь, что сервер ожидает параметр DishId в теле запроса
    });
    return response.data;
  };

// Увеличить количество блюда
export const incrementDishQuantity = async (token: string, dishId: string) => {
  const response = await axios.put(
    `${API_URL}/quantity/increment`,
    { DishId: dishId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Уменьшить количество блюда
export const decrementDishQuantity = async (token: string, dishId: string) => {
  const response = await axios.put(
    `${API_URL}/quantity/decrement`,
    { DishId: dishId },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
