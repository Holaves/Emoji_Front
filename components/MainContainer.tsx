import React, { CSSProperties, FC } from 'react';
import styles from '../styles/MainContainer/MainContainer.module.scss'

interface MainContainerProps {
    children: React.ReactNode;
    styless?: CSSProperties
}


const MainContainer:FC<MainContainerProps> = ({children, styless}) => {
   return(
       <div style={styless} className={styles.MainContainer}>
            {children}
       </div>
   );
};


export default MainContainer;