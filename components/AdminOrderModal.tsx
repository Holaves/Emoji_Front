import { CartDish } from '@/types/dish';
import React, { FC, useEffect, useState } from 'react';
import Cart from './Cart';

interface AdminOrderModalProps{
    cart: CartDish
}

const AdminOrderModal:FC<AdminOrderModalProps> = ({cart}) => {
    useEffect(() => {
        console.log(cart)
    }, [])
    const [isOpenModal, setIsOpenModal] = useState <boolean>(true)
   return(
       <div className='AdminOrderModal'>
            <Cart cart={cart.dishes} isOrder={true} isOpenModal={isOpenModal} />
       </div>
   );
};


export default AdminOrderModal;