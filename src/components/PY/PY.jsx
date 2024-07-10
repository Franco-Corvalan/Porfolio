import React from 'react'
import styles from "./PY.module.css"
import { useState, useEffect, useRef } from "react"
import { useInView, motion, transform } from "framer-motion"

function PY({data}) {

  const [tech, setTech] = useState([])
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.9, opacity: 0 },
  }

  useEffect(() => {
    const arrayTech = data.Desc3.split(",")
    const arrayT = arrayTech.map((te) => {
      if (te === "HTML"){ return {name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"} }
      else if (te === "CSS"){ return {name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"} }
      else if (te === "JavaScript"){ return {name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"} }
      else if (te === "Node"){ return {name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"} }
      else if (te === "GitHub"){ return {name: "GitHub Pages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"} }
      else if (te === "MongoDB"){ return {name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"} }
      else if (te === "MySQL"){ return {name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"} }
      else if (te === "React"){ return {name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"} }
      else if (te === "FramerMotion"){ return {name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"} }
      else if (te === "ReactSpring"){ return {name: "React Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"} }
      else if (te === "Vercel"){ return {name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"} }
      else if (te === "Next.js"){ return {name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"} }
      else{ return {name: "", icon: ""} }
    })
    setTech(arrayT)
  }, [data])

  return (
    <motion.div className={styles.PY} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.8, ease: "easeOut" }} variants={estilosDeCarga} >
        <div className={styles.panel0Cont}>{data.Nombre}</div>
        <div className={styles.panel1Cont}>
            <div className={styles.artCont1}>
                <div className={styles.art1}>{data.Desc1}</div>
                <div className={styles.galeria2} ref={ref}>
                    <motion.img src={data.img4} alt="" className={styles.imgR1} animate={{opacity: [1, 1, 0, 0, 0, 0, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img5} alt="" className={styles.imgR2} animate={{opacity: [0, 0, 1, 1, 0, 0, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img6} alt="" className={styles.imgR3} animate={{opacity: [0, 0, 0, 0, 1, 1, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img5} alt="" className={styles.imgR4} animate={{opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img4} alt="" className={styles.imgR5} animate={{opacity: [0, 0, 0, 0, 0, 0, 0, 0, 1]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                </div>
            </div>
            <div className={styles.artCont2}>
                <div className={styles.galeria1}>
                    <motion.img src={data.img1} alt="" className={styles.imgA1} animate={{opacity: [1, 1, 0, 0, 0, 0, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img2} alt="" className={styles.imgA2} animate={{opacity: [0, 0, 1, 1, 0, 0, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img3} alt="" className={styles.imgA3} animate={{opacity: [0, 0, 0, 0, 1, 1, 0, 0, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img2} alt="" className={styles.imgA4} animate={{opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                    <motion.img src={data.img1} alt="" className={styles.imgA5} animate={{opacity: [0, 0, 0, 0, 0, 0, 0, 0, 1]}} transition={{duration: 30, times: [0, 0.20, 0.25, 0.45, 0.5, 0.7, 0.75, 0.95, 1], repeat: Infinity}}/>
                </div>
                <div className={styles.art2}>{data.Desc2}</div>
            </div>
        </div>
        <div className={styles.panel2Cont}>
          <div className={styles.techCont}>
            {tech.map((t) => <div key={tech.indexOf(t)} className={styles.tech}>
              <img src={t.icon} alt="" className={styles.iconT} />
              <div className={styles.namT}>{t.name}</div>
            </div>)}
          </div>
          <div className={styles.linkCont}>
            <a href={data.link} className={styles.link} target="_blank" rel="noopener noreferrer">Ir al sitio</a>
          </div>
        </div>
    </motion.div>
  )
}

export default PY