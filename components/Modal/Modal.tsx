import React, {useEffect} from "react";
import styles from "./Modal.module.css";
import { Follows } from "../Follows/Follows";
import { Author } from "@/app/types";

interface props { 
    modal: boolean;
    setModal: (modal: boolean)=> void;
    seguidos: Author[]| undefined
}
export const Modal:React.FC<props> = ({
    modal, setModal, seguidos
}) => {
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
          if (modal && event.target.closest(`.${styles.modal}`) === null) {
            setModal(false);
          }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [modal, setModal]);

  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <button onClick={()=> setModal(!modal)}>X</button>
      </div>
      {
      seguidos?.length ? seguidos?.map((e: Author) => {
          return  <Follows key={e.id} image={e.image} id={e.id} name={e.name}/>
        })
      :  <span className={styles.dont}>No hay usuarios</span>}   
    </div>
  );
};
