import styles from "./MenuH.module.css";
import React from 'react'
import { useContext } from 'react'
import { PortfolioContext } from "../../Context/PortfolioContext"
import {motion} from "framer-motion"

function MenuH() {

      const { setMenuH } = useContext(PortfolioContext)

  return (
    <motion.div className={styles.menu} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 1 }}>
        <div className={styles.menuCont}>
          <a className={styles.link} href='#ihome' onClick={() => setMenuH(false)}>Inicio</a>
          <a className={styles.link} href='#iabout' onClick={() => setMenuH(false)}>Acerca de</a>
          <a className={styles.link} href='#iproyectos' onClick={() => setMenuH(false)}>Proyectos</a>
          <a className={styles.link} href='#icontacto' onClick={() => setMenuH(false)}>Contacto</a>
        </div>
    </motion.div>
  )
}

export default MenuH