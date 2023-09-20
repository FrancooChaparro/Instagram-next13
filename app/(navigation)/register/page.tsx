"use client"
import React, { useState, useEffect } from 'react'
import styles from "./Register.module.css";
import { Input } from '@/components/Input/Input';
import { LoginForm } from '@/app/types';
import { useRouter } from 'next/navigation';


const Register = () => {
  const router = useRouter()
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
      <div className={styles.dada}>   
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
            <div className={styles.capchat}>
               <span>
               Es posible que los usuarios de nuestro servicio hayan subido tu información de contacto en Instagram.<span className={styles.spanCapchat}>Más información</span>
               </span>
            </div>
            <div className={styles.capchat}>
               <span>
               Al registrarte, aceptas nuestras <span className={styles.spanCapchat}>Condiciones, nuestra Política de privacidad y nuestra Política de cookies.</span>
               </span>
            </div>
            <button className={styles.btnRegister}>Registrate</button>
      </div>
      <div className={styles.container2}>
          <span>¿Tienes una cuenta?</span><span onClick={() => router.push("/login")} className={styles.entry}>Entrar</span>
      </div>
      <div className={styles.container3}>
          <span>Descarga la aplicación.</span>
          <div className={styles.containerImageAll}>
            <div className={styles.containerImage}><img src="/images/Googleplay.png" alt="Googleplay" /></div>
            <div className={styles.containerImage}><img src="/images/Microsoft.png" alt="Microsoft" /></div>    
          </div>
      </div>
    </div>
    </div>

  )
}

export default Register;