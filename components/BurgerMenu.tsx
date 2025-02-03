import React, { FC, useState } from 'react';
import styles from '../styles/BurgerMenu/BurgerMenu.module.scss'
import { ICategoria } from '@/types/categoria';
import Link from 'next/link';

interface BurgerMenuProps{
    categories: ICategoria[]
    isOpen: boolean;
}

const BurgerMenu:FC<BurgerMenuProps> = ({categories, isOpen}) => {
    const [more, setMore] = useState <boolean>(false)
    
  const mainCategories = categories.slice(0, 4);
  const moreCategories = categories.slice(4);


   if(!isOpen) return <></>
    return(
       <div className={styles.BurgerMenu}>
            <div className={styles.BurgerMenu_wrapper}>
                <ul>
                    {!more ? mainCategories.map((item: ICategoria, index: number) => 
                        <li key={index}>{item.subName}</li>
                    ): moreCategories.map((item: ICategoria, index: number) => 
                        <li key={index}>{item.subName}</li>)}
                    <li onClick={() => setMore(!more)}>{!more ? <>Еще категории</> : <>Свернуть категории</>}</li>
                    <li style={{color: 'green'}}>Ватцап</li>
                    <li>Акции</li>
                    <li><Link href={'https://t.me/EmojiAuth_bot'}>Войти</Link></li>
                </ul>
            </div>
       </div>
   );
};


export default BurgerMenu;