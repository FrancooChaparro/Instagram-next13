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
          // Si el clic ocurre fuera del contenido del modal, cierra el modal
          if (modal && event.target.closest(`.${styles.modal}`) === null) {
            setModal(false);
          }
        };
    
        // Agrega el manejador de eventos al hacer clic en el documento
        document.addEventListener('click', handleOutsideClick);
    
        // Limpia el manejador de eventos al desmontar el componente
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, [modal, setModal]);
  return (
    <div className={styles.modal}>
      <div className={styles.close}>
        <button onClick={()=> setModal(!modal)}>X</button>
      </div>
    {/* <span className={styles.dont}>No hay usuarios</span> */}
      {
      seguidos?.length ? seguidos?.map((e: Author) => {
          return  <Follows key={e.id} image={e.image} id={e.id} name={e.name}/>
        })
      :  <span className={styles.dont}>No hay usuarios</span>}
      
    </div>
  );
};
