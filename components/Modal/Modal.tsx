import React from 'react';
import styles from "./Modal.module.css"
import { Follows } from '../Follows/Follows';


export const Modal = () => {
  return (
    <div className={styles.modal}>
        <div className={styles.close}>
            <button>X</button>
        </div>

<Follows />
<Follows />
<Follows />
<Follows />
<Follows />
<Follows />
<Follows />
<Follows />
<Follows />


    </div>
  )
}
