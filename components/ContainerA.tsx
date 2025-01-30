import React, { CSSProperties } from 'react'
import styles from '../styles/ConainerA/ContainerA.module.scss'

interface ContainerAProps {
    children: React.ReactNode;
    styless?: CSSProperties
}

const ContainerA: React.FC<ContainerAProps> = ({children, styless}) => {
   return(
       <div className={styles.ContainerA} style={styless}>
            {children}
       </div>
   );
};


export default ContainerA;