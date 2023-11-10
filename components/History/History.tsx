import Image from 'next/image'
import React from 'react'
import styles from "../Historys/Historys.module.css"
export const History = () => {
  return (
    <div className={styles.containerHistory}>
    <div className={styles.history}>
      <Image
      src="/images/profile.jpg"
      width={64}
      height={64}
      alt="Picture of the author"
      style={{"objectFit": "cover", objectPosition: "center"}}
    />
    </div>
    <span>Sara Billsbills</span>
    </div>
  )
}
