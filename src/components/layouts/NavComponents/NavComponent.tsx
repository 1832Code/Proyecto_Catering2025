"use client";
import React from "react";
import { useState } from "react";
import styles from "./NavComponent.module.css";
import logo from "../../../assets/images/LogoBolivar.png";
import { LoginView } from "../LoginComponents/LoginView";
import { LoginButtom } from "../LoginComponents/LoginButtom";
import Link from 'next/link';  

export const NavComponent = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className={styles.MainArea}>
        <div className={styles.LogoArea}>
          <img className={styles.logo} src={logo.src} />
        </div>
        <div className={styles.NavAndButtom}>
          <nav className={styles.NavArea}>
            <ul className={styles.NavRowArea}>
              <li className={styles.NavItem}>
                <Link href="/">Inicio</Link> 
              </li>
              <li className={styles.NavItem}>
                <Link href="/servicios">Servicios</Link>{" "}
              
              </li>
              <li className={styles.NavItem}>
                <Link href="/nosotros">Nosotros</Link>{" "}
              
              </li>
              <li className={styles.NavItem}>
                <Link href="/reservar">Reservar</Link>{" "}
              
              </li>
            </ul>
          </nav>
          <div className={styles.LoginArea}>
            <LoginButtom onClick={() => setShowLogin(true)} />
          </div>
        </div>
      </div>
      {showLogin && <LoginView onClose={() => setShowLogin(false)} />}
    </>
  );
};
export default NavComponent;
