import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import styles from "./Footer.module.css"
import { useContext } from 'react'
import { PortfolioContext } from "../../Context/PortfolioContext"
import {motion} from "framer-motion"

function Footer() {

  const { scrollH } = useContext(PortfolioContext)

  const vHM5 = {
    open: { background: "linear-gradient(315deg, rgba(0, 0, 0, 0.9) 80%, transparent 20%)",  color: "white", fontSize: "1rem" },
    closed: { background: "linear-gradient(315deg, transparent 80%, transparent 20%)",  color: "black", fontSize: "1.4rem" },
  }

  return (
    <motion.div className={styles.Footer} initial={{height: "calc(30px * var(--altoF))", top: "calc(100vh - (30px * var(--altoF)))"}} animate={scrollH === true ? {height: "calc(15px * var(--altoF))", top: "calc(100vh - (15px * var(--altoF)))"} : {height: "calc(30px * var(--altoF))", top: "calc(100vh - (30px * var(--altoF)))"}}>
        <div className={styles.hModuleB}>
          <div className={styles.half}></div>
        </div>
        <motion.div className={styles.iconsCont} initial={{background: "linear-gradient(315deg, transparent 80%, transparent 20%)", color: "black", fontSize: "1.4rem"}} animate={scrollH === true ? "open" : "close"} variants={vHM5}>
          <motion.a rel="noopener noreferrer" href="https://linkedin.com/in/waltersánchez26" target="_blank" initial={{color: "black"}} animate={scrollH === true ? {color: "white"} : {color: "black"}}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
          </motion.a>
          <motion.a rel="noopener noreferrer" href="https://github.com/Z4nchez" target="_blank" initial={{color: "black"}} animate={scrollH === true ? {color: "white"} : {color: "black"}}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}/>
          </motion.a>         
        </motion.div>
    </motion.div>
  )
}

export default Footer