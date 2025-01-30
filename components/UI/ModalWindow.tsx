import React, { CSSProperties, FC, ReactNode, useEffect } from 'react';
import styles from './styles/ModalWindow/ModalWindow.module.scss'

interface ModalWindowProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    styless?: CSSProperties;
    width?: number;
    height?: number;
    order?: boolean;
}

const ModalWindow:FC<ModalWindowProps> = ({order, isOpen, onClose, children, styless, width, height}) => {
    useEffect(() => {
        if (isOpen) {
          document.body.classList.add("modalOpen");
        } else {
          document.body.classList.remove("modalOpen");
        }
    
        return () => {
          document.body.classList.remove("modalOpen");
        };
      }, [isOpen]);
    if (!isOpen) return null;

   return(
        <div className={!order ?styles.modalWindow : styles.modalWindow_order} style={styless} onClick={onClose}>
            <div className={styles.modalContent} style={{maxWidth: `${width}px`, height: `${height}px`}} onClick={(e) => e.stopPropagation()}>
                <div className={styles.closeButton} onClick={onClose}>
                    <div className={styles.hideIcon}></div>
                </div>
                {children}
            </div>
    </div>
   );
};


export default ModalWindow;