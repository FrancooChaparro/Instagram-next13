import React, { useRef } from 'react';
import styles from "./Historys.module.css";
import { History } from '../History/History';

export const Historys = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const carouselRef = useRef<HTMLDivElement>(null);
  const le = "<"
  const ri = ">"
  const handleScrollLeft = () => {
      if (carouselRef.current) {
          carouselRef.current.scrollBy({
              left: -425,
              behavior: 'smooth',
          });
      }
  };
  const handleScrollRight = () => {
      if (carouselRef.current) {
          carouselRef.current.scrollBy({
              left: 425,
              behavior: 'smooth',
          });
      }
  };
  return (
    <div className={styles.containerAll} >
      <div ref={carouselRef} className={styles.content} >
        {array.map((e, index) => {
          return <History key={index} />;
        })}
      </div>
        <div className={styles.containerbuttons}>
        <button className={styles.containerBtnLeft} onClick={() => handleScrollLeft()}>{le}</button>
        <button className={styles.containerBtnRight} onClick={() => handleScrollRight()}>{ri}</button>
        </div>
      </div>
  );
};
