import React, {useRef} from 'react'
import styles from "./Backscreen.module.css"
import {motion, useScroll, useTransform} from "framer-motion"
import { useContext } from 'react'
import { PortfolioContext } from "../../Context/PortfolioContext"
import MenuH from '../MenuH/MenuH'

function Backscreen() {

  const { menuH } = useContext(PortfolioContext)

  return (
    <>
      <div className={styles.hero} >
        <div className={styles.contVideo} >
          <video className={styles.fondo} src="cube.webm" autoPlay muted loop ></video>
        </div>
      </div>
      {menuH === true && <MenuH></MenuH>}     
      <div className={styles.blur} ></div>
      <div className={styles.lumin}></div>
      <div className={styles.lumin2} ></div>
    </>
  )
}

export default Backscreen