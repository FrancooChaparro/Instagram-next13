"use client"
import React, { useState } from 'react'
import styles from "./Register.module.css";
import { Input } from '@/components/Input/Input';
import { LoginForm } from '@/app/types';

const Register = () => {
  const [inputValues, setInputValues] = useState<LoginForm>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className={styles.containerAll}>
      <div className={styles.container}>
          <div className={styles.title}>
            <h3>Instagram</h3>
          </div>
          <div className={styles.span}><span>Regístrate para ver fotos y vídeos de tus amigos.</span></div>
          <button className={styles.btn}>iniciar sesion con Facebook</button>
          <hr />
          <div className={styles.containerInput}>
          <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Correo electronico"}
              />
            <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Nombre completo"}
              />
               <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Nombre de usuario"}
              />
               <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"email"}
                type={"text"}
                placeholder={"Contraseña"}
              />
            </div>
            <div>
               <span>
               Es posible que los usuarios de nuestro servicio hayan subido tu información de contacto en Instagram. Más información
               </span>
            </div>
            <div>
               <span>
               Al registrarte, aceptas nuestras Condiciones, nuestra Política de privacidad y nuestra Política de cookies.
               </span>
            </div>
      </div>
    </div>
  )
}

export default Register;