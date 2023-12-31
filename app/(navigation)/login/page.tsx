"use client"
import React, { useState } from 'react';
import styles from "./Login.module.css";
import { Input } from '@/components/Input/Input';
import { LoginForm } from '@/app/types';
import { useRouter } from 'next/navigation';
import { useMyContext } from "@/context/ListContext";

async function post_login(props: LoginForm, router: any) {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }

    const data = await response.json();

    console.log(data);

    if (data.success) {
      localStorage.setItem('userData', JSON.stringify(data.msg));
      router.push("/");
    } else {
      alert("La contraseña no es válida");
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

const Login = () => {
  const router = useRouter()
  const { black_mode } = useMyContext();

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
      <div className={black_mode ? styles.title : styles.title_black}>
            <h3>Instagram</h3>
        </div>
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
                value={inputValues.password}
                name={"password"}
                type={"password"}
                placeholder={"Contraseña"}
              />
               <button onClick={() => post_login(inputValues, router)} className={styles.btnRegister}>Login</button>
            </div>
          <hr />
          <div className={styles.changePassword}>
              <span>¿Has olvidado la contraseña?</span>
          </div>
          </div>
          <div className={styles.container2}>
          <span>¿Tienes una cuenta?</span><span onClick={() => router.push("/register")} className={styles.entry}>Registrate</span>
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

export default Login;