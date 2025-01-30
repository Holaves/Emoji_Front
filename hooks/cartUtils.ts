import { CartDish, DishObject, IDish } from "@/types/dish";

// Получить корзину из LocalStorage
export const getCart = (): CartDish => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : { dishes: [], isDelive: false };
};

// Добавить товар в корзину
export const addToCart = (dish: IDish): void => {
  const cart = getCart();
  const existingItem = cart.dishes.find((item) => item.dish._id === dish._id);

  if (existingItem) {
    // Увеличиваем количество на 1, если товар уже есть
    existingItem.quantity += 1;
  } else {
    // Добавляем новый товар
    cart.dishes.push({ dish, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

// Удалить товар из корзины
export const removeFromCart = (dishId: number): void => {
  const cart = getCart();
  cart.dishes = cart.dishes.filter((item) => item.dish._id !== dishId);

  console.log('aa')
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Очистить корзину
export const clearCart = (): void => {
  localStorage.removeItem("cart");
};

// Установить статус доставки
export const setDeliveryStatus = (isDelive: boolean): void => {
  const cart = getCart();
  cart.isDelive = isDelive;

  localStorage.setItem("cart", JSON.stringify(cart));
};
