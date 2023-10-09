"use client"
import Nav from '@/components/nav/Nav';
import React from 'react';
import styles from "./create.module.css"

const Create = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.center}>
        <div className={styles.createContainer}>
            <h3 className={styles.title}>Create Post</h3>
            <h4 className={styles.label}>Title</h4>
            <input className={styles.input} type="text" />
            <h4 className={styles.label}>Image</h4>
            <input className={styles.input} type="text" />
            <div className={styles.containerBtn}>
              <button>POST</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Create;