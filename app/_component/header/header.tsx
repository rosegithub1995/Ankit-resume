'use client'
import { AnimatePresence } from 'framer-motion';
import styles from './style.module.scss'
import { useState } from 'react'
import Nav from "@/app/_component/header/nav/Nav"


export default function Header() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
    <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>

<div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>

</div>

<AnimatePresence mode="wait">

{isActive && <Nav />}

</AnimatePresence>
    </>
  )
}