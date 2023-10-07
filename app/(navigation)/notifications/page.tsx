"use client"
import Nav from '@/components/nav/Nav';
import React from 'react';
import styles from "./notifications.module.css"

const Notifications = () => {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.containerNotifications}>
        <h4>No tienes notificaciones.</h4>
      </div>
    </div>
  )
}

export default Notifications;
