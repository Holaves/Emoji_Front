import React, { CSSProperties, FC, ReactNode } from 'react';
import styles from './styles/title.module.scss'
import ContainerA from '../ContainerA';

interface TitleProps {
    children: ReactNode;
    stylesCss?: CSSProperties
}

const Title: FC<TitleProps> = ({children, stylesCss}) => {
    const parseText = (text: string) => {
        const parts = text.split(/(\*[^*]+\*)/); // Разделяем текст на части по шаблону "*текст*"
    
        return parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            // Если часть окружена `*`, убираем их и применяем стиль
            return (
              <span key={index} className={styles.orangeText}>
                {part.slice(1, -1)}
              </span>
            );
          }
          return part; // Оставляем остальные части без изменений
        });
      };

   return(
            <div className={styles.Title} style={stylesCss}>
                {typeof children === 'string' ? parseText(children) : children}
            </div>
   );
};


export default Title;