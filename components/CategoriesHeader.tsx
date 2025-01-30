import React, { useEffect, useState } from "react";
import { ICategoria } from "@/types/categoria";
import { useRouter } from "next/router";
import styles from "../styles/CategoriesHeader/CategoriesHeader.module.scss";
import ContainerA from "./ContainerA";
import Cart from "./Cart";
import { getCart } from "@/hooks/cartUtils";
import { AppURL } from "@/layouts/MainLayout";
import { CartDish } from "@/types/dish";
import Link from "next/link";
import { useTypedSelector } from "@/hooks/useTypedSelector";

interface CategoriesHeaderPros {
  categories: ICategoria[];
}

const CategoriesHeader: React.FC<CategoriesHeaderPros> = ({ categories }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartDish>({ dishes: [], isDelive: false });
  const [newCart, setNewCart] = useState <any>([])
  const {isAddCart} = useTypedSelector(state => state.cart)
  const [isAddClass, setIsAddClass] = useState <boolean>(false)
  const [counter, setCounter] = useState <number>(0)
  useEffect(() => {
      if(counter > 0){
        setIsAddClass(true)
        setTimeout(() => {setIsAddClass(false)}, 2000)
      }
      setCounter(counter + 1)
  }, [isAddCart])

  const router = useRouter();

  const onClickHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const mainCategories = categories.slice(0, 4);
  const moreCategories = categories.slice(4);

  return (
    <div className={styles.CategoriesHeader}>
      <ContainerA
        styless={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.CategoriesHeader_wrapper}>
          <div className={styles.CategoriesHeaderBlock}>
            <div className={styles.logo_short} onClick={() => router.push('/')}></div>
            <ul className={styles.CategoriesHeader_list}>
              {mainCategories.map((item, index) => (
                <li
                  className={styles.CategoriesHeader_list_item}
                  key={index}
                  onClick={() => router.push(`/categories/${item._id}`)}
                >
                  {item.subName}
                </li>
              ))}
            </ul>
            <div
              className={styles.MoreCategories_dropDown}
              onClick={toggleDropdown}
            >
              <h4>Ещё</h4>
              <span
                className={`${styles.MoreCategories_dropDown_arrow} ${
                  isDropdownOpen ? styles.open : ""
                }`}
              ></span>
              {isDropdownOpen && (
                <ul className={styles.MoreCategories_list}>
                  {moreCategories.map((item, index) => (
                    <li
                      className={styles.MoreCategories_list_item}
                      key={index}
                      onClick={() => router.push(`/categories/${item._id}`)}
                    >
                      {item.subName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.header_dot}></div>
            <Link className={styles.text_hed} href={'/stocks'} style={{textDecoration: 'none'}}>Акции</Link>
          </div>
          <div className={isAddClass ? styles.Cart_button_withBefore : styles.Cart_button} data-counter={isAddCart} onClick={onClickHandler}>
            Корзина
          </div>
          {/* @ts-ignore */}
          <Cart dishes={cart.dishes || []} isOpenModal={isOpenModal} />
        </div>
      </ContainerA>
    </div>
  );
};

export default CategoriesHeader;
