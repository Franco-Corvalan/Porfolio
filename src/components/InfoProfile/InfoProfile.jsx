import React from 'react'
import styles from "./InfoProfile.module.css"
import {motion} from "framer-motion"

function InfoProfile() {
  return (
    <motion.div className={styles.InfoProfile} initial={{opacity: 0}} animate={{opacity: 1}}>
        <p>Soy un Full Stack Developer con una formación adicional como Diseñador Web. Mi carrera me ha brindado una sólida experiencia en una amplia gama de tecnologías, incluyendo React, Redux, Node.js, SQL y muchas otras. Mis habilidades abarcan tanto el desarrollo en el lado del servidor (Backend) como en el lado del cliente (Frontend), lo que me permite aportar una perspectiva completa a los proyectos en los que participo. Me caracterizo por mi constancia, responsabilidad y proactividad. Estoy comprometido con el aprendizaje continuo y puedo adaptarme rápidamente a las nuevas tecnologías y desafíos. Además, tengo habilidades sólidas que me permiten liderar equipos y trabajar eficazmente bajo presión.</p>
    </motion.div>
  )
}

export default InfoProfile