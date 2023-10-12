"use client";
import React, { useState } from "react";
import styles from "./Register.module.css";
import { Input } from "@/components/Input/Input";
import { RegisterForm } from "@/app/types";
import { useRouter } from "next/navigation";
import { useMyContext } from "@/context/ListContext";

async function post_register(props: RegisterForm, router: any) {
  try {
    const response = await fetch("/api/register", {
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

    if (data.status) {
      router.push("/login");
    } else {
      alert(data.msg);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

const Register = () => {
  const router = useRouter();
  const { black_mode } = useMyContext();
  const [inputValues, setInputValues] = useState<RegisterForm>({
    email: "",
    name: "",
    username: "",
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
          <div className={styles.span}>
            <span>Regístrate para ver fotos y vídeos de tus amigos.</span>
          </div>
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
              value={inputValues.username}
              name={"username"}
              type={"text"}
              placeholder={"Nombre de usuario"}
            />
            <Input
              Onchange={handleChange}
              value={inputValues.password}
              name={"password"}
              type={"password"}
              placeholder={"Contraseña"}
            />
          </div>
          <div className={styles.capchat}>
            <span>
              Es posible que los usuarios de nuestro servicio hayan subido tu
              información de contacto en Instagram.
              <span className={styles.spanCapchat}>Más información</span>
            </span>
          </div>
          <div className={styles.capchat}>
            <span>
              Al registrarte, aceptas nuestras{" "}
              <span className={styles.spanCapchat}>
                Condiciones, nuestra Política de privacidad y nuestra Política
                de cookies.
              </span>
            </span>
          </div>
          <button
            onClick={() => post_register(inputValues, router)}
            className={styles.btnRegister}
          >
            Registrate
          </button>
        </div>
        <div className={styles.container2}>
          <span>¿Tienes una cuenta?</span>
          <span onClick={() => router.push("/login")} className={styles.entry}>
            Entrar
          </span>
        </div>
        <div className={styles.container3}>
          <span>Descarga la aplicación.</span>
          <div className={styles.containerImageAll}>
            <div className={styles.containerImage}>
              <img src="/images/Googleplay.png" alt="Googleplay" />
            </div>
            <div className={styles.containerImage}>
              <img src="/images/Microsoft.png" alt="Microsoft" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
