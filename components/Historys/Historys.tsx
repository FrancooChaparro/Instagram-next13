import React from 'react'
import styles from "./Historys.module.css"
import { History } from '../History/History'


export const Historys = () => {
  const array = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className={styles.containerAll}>
     {
      array.map((e, index) => {
        return <History key={index} />
      })
     }
    </div>
  )
}
