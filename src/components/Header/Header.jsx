import styles from "./Header.module.css"
import { motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react'
import { PortfolioContext } from "../../Context/PortfolioContext";

function Header() {

  const { setMenuH, menuH, scrollH } = useContext(PortfolioContext)

  function actionMenu(){
    if (menuH === false){
      setMenuH(true)
    }
    else{
      setMenuH(false)
    }
  }

  const vHM0 = {
    open: { background: "linear-gradient(135deg, rgba(0, 0, 0, 0.9) 80%, transparent 20%)", height: "100%" },
    closed: { background: "linear-gradient(135deg, transparent 80%, transparent 20%)", height: "50%" },
  }
  const vHM1 = {
    open: { background: "linear-gradient(225deg, rgba(0, 0, 0, 0.9) 80%, transparent 20%)", fontSize: "1rem" },
    closed: { background: "linear-gradient(225deg, transparent 80%, transparent 20%)", fontSize: "1rem" },
  }
  const vL = {
    open: {  color: "white" },
    closed: { color: "black" },
  }
  const vC = {
    open: {  width: "30%" },
    closed: { width: "60%" },
  }

  return (
    <motion.div className={styles.header} animate={scrollH === true ? {height: "calc(15px * var(--altoH))"} : {height: "calc(60px * var(--altoH))"}} >
      <motion.div className={styles.hModule0} initial={{background: "linear-gradient(135deg, transparent 80%, transparent 20%)", height: "50%", color: "black"}} animate={scrollH === true ? "open" : "close"} variants={vHM0}>
        <motion.div className={styles.logoCont} initial={{width: "60%"}} animate={scrollH === true ? "open" : "closed"} variants={vC}>
            <img src="logo.webp" alt='logo'/>
        </motion.div>
      </motion.div>
      <div className={styles.hModuleB}>
        <div className={styles.half}></div>
      </div>
      <motion.div className={styles.hModule1} initial={{background: "linear-gradient(225deg, transparent 80%, transparent 20%)", fontSize: "0.7rem", color: "black"}} animate={scrollH === true ? "open" : "close"} variants={vHM1}>
        <motion.div className={styles.menuCont} animate={scrollH === true ? {justifyContent: "flex-end"}: {justifyContent: "center"}}>
          <div className={styles.linkCont}>
            <motion.a className={styles.link} href='#ihome' initial={{ color: "black" }} animate={scrollH === true ? {color: "white"} : {color: "black"}} variants={vL}>Inicio</motion.a>
          </div>
          <div className={styles.linkCont}>
            <motion.a className={styles.link} href='#iabout' initial={{ color: "black" }} animate={scrollH === true ? {color: "white"} : {color: "black"}} variants={vL}>Acerca de</motion.a>
          </div>
          <div className={styles.linkCont}>
            <motion.a className={styles.link} href='#iproyectos' initial={{ color: "black" }} animate={scrollH === true ? {color: "white"} : {color: "black"}} variants={vL}>Proyectos</motion.a>
          </div>
          <div className={styles.linkCont}>
            <motion.a className={styles.link} href='#icontacto' initial={{ color: "black" }} animate={scrollH === true ? {color: "white"} : {color: "black"}} variants={vL}>Contacto</motion.a>
          </div>
        </motion.div>
        <motion.div className={styles.hModule2} initial={{color: "black"}} animate={scrollH === true ? {color: "white"} : {color: "black"}}>
          <FontAwesomeIcon icon={faBars} className={styles.menuIcon} onClick={actionMenu}/>
        </motion.div>
      </motion.div> 
          
    </motion.div>
  )
}

export default Header