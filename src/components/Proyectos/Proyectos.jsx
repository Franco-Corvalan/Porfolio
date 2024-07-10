import React from 'react'
import styles from "./Proyectos.module.css"
import { useInView, motion } from "framer-motion"
import PY from '../PY/PY'
import { useRef, useContext, useState, useEffect } from "react"
import { PortfolioContext } from "../../Context/PortfolioContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"

function Proyectos() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { proyectos } = useContext(PortfolioContext)
  const [nPY, setNPY] = useState(0)

  return (
    <div className={styles.Proyectos} id='iproyectos' >
      <motion.div className={styles.back} transition={{duration: 0.5, ease: "easeOut"}} initial={{scale: 0.6, opacity: 0}} animate={isInView ? {scale: 1, opacity: 1} : {scale: 0.6, opacity: 0}}>
        <div className={styles.back2} >
          <div className={styles.proyectosCont} ref={ref}>
            <div className={styles.tituloCont}>
              <motion.div className={styles.titulo} transition={{delay: 0.5, duration: 0.5, ease: "easeOut"}} initial={{left: "-200px", opacity: 0}} animate={isInView ? {left: "0px", opacity: 1} : {left: "-200px", opacity: 0}}>Proyectos</motion.div>
              <div className={styles.menuCont}>
                <div className={styles.bMenu}>
                  <FontAwesomeIcon className={styles.control} icon={faCircleChevronLeft} style={nPY < 1 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => setNPY(nPY - 1)}/>
                </div>
                <div className={styles.bMenu}>
                  <FontAwesomeIcon className={styles.control} icon={faCircleChevronRight} style={nPY > 3 ? {visibility: "hidden"} : {visibility: "visible"}} onClick={() => setNPY(nPY + 1)}/>
                </div>
              </div>
            </div>            
            <div className={styles.pr}>
              <div className={styles.prCont} style={{left: `calc(-100% * ${nPY})`}}>
                {proyectos.map((proy) => <PY key={proyectos.indexOf(proy)} data={proy}></PY>)}
              </div>              
            </div>
          </div>
        </div>        
      </motion.div>
    </div>
  )
}

export default Proyectos