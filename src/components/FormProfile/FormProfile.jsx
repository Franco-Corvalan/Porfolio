import React from 'react'
import styles from "./FormProfile.module.css"
import {motion} from "framer-motion"

function FormProfile() {
  return (
    <motion.div className={styles.FormProfile} initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className={styles.formacion}>
            <img src="sjbosco.webp" alt=""/>
            <div className={styles.descripcion}>Me formé en la Universidad Patagonica San Juan Bosco entre 2008 y 2012 como Analista Programador en Sistemas</div>
        </div>
        <div className={styles.subtitulo}>Cursos</div>
        <div className={styles.formacion}>
            <img src="dorian.webp" alt="" />
            <div className={styles.descripcion}>Dorian Designs: cursos de HTML, CSS y JavaScript</div>
        </div>
        <div className={styles.formacion}>
            <img src="blueweb.webp" alt="" />
            <div className={styles.descripcion}>Blueweb: cursos de JavaScript y React</div>
        </div>
        <div className={styles.formacion}>
            <img src="fazt.webp" alt="" />
            <div className={styles.descripcion}>Fazt: cursos de Node, MongoDB, GitHub y despliegue</div>
        </div>
    </motion.div>
  )
}

export default FormProfile