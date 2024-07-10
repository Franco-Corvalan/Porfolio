import React, {useRef} from 'react'
import styles from "./HomePage.module.css"
import {useInView} from "framer-motion"

function HomePage() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={styles.HomePage}  id='ihome' >
      <div className={styles.HomeCont}>
          
        <div className={styles.ImgCont} style={{scale: isInView ? "1" : "0.5", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}} >
          <div className={styles.space} ref={ref}></div>
          <img src="avatar0.png" alt="avatar" />
        </div>
        <div className={styles.NameCont} style={{scale: isInView ? "1" : "0.5", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}} >
          <h2>Franco Corvalan</h2>
        </div>
        <div className={styles.DescCont} style={{scale: isInView ? "1" : "0.5", opacity: isInView ? 1 : 0, transition: "all 0.6s ease-out"}} >
          <p>Programador y Desarrollador Web</p>
        </div>
        
      </div>
    </div>
  )
}

export default HomePage