import { ICategoria } from '@/types/categoria';
import React, { FC } from 'react';
import DishesCategoriesItem from './DishesCategoriesItem';

interface DishesCategoriesListProps {
    categories: ICategoria[]
}

const DishesCategoriesList:FC<DishesCategoriesListProps> = ({categories}) => {
   return(
       <div id="anchor_two" style={{paddingBottom: '50px'}}>
            {
                categories.map((item: ICategoria, index) => 
                    <DishesCategoriesItem  key={index} categoria={item} over={index === categories.length - 1 ? true : false}/>
                )
            }
       </div>
   );
};


export default DishesCategoriesList;