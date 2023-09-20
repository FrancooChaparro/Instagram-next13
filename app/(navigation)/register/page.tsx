"use client"
import React, { useState, useEffect } from 'react'
import styles from "./Register.module.css";
import { Input } from '@/components/Input/Input';
import { LoginForm, tester } from '@/app/types';
import { useRouter } from 'next/navigation';

async function registro (
  email: string,
  name: string
) {
  const requestOptions = {
    method: 'POST', // Método POST
    headers: {
      'Content-Type': 'application/json', // Tipo de contenido que estás enviando (puedes ajustarlo según tus necesidades)
      // Puedes incluir otras cabeceras aquí si es necesario
    },
    body: JSON.stringify({email, name}), // Convierte los datos en formato JSON
  };
   const res = await fetch("/api/register", requestOptions) 
   .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json(); // Parsea la respuesta JSON si se recibe una respuesta exitosa
  })
  .then(data => {
    // Manejar los datos de la respuesta aquí
    console.log(data);
  })
}

const Register = () => {
  
  const router = useRouter()
  const [inputValues, setInputValues] = useState<tester>({
    email: "",
    name: "",
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
                type={"email"}
                placeholder={"Correo electronico"}
              />
            <Input
                Onchange={handleChange}
                value={inputValues.name}
                name={"name"}
                type={"text"}
                placeholder={"Nombre completo"}
              />
               <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"username"}
                type={"text"}
                placeholder={"Nombre de usuario"}
              />
               <Input
                Onchange={handleChange}
                value={inputValues.email}
                name={"password"}
                type={"password"}
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
            <button onClick={()=> registro(inputValues.email, inputValues.name)} className={styles.btnRegister}>Registrate</button>
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