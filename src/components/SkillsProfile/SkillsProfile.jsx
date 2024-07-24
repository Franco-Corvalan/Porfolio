import React from 'react'
import styles from "./SkillsProfile.module.css"
import { motion } from "framer-motion"

function SkillsProfile() {
    return (
        <motion.div className={styles.SkillsProfile} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className={styles.tituloSkills}>Tecnologias que uso</p>
            <div className={styles.itemPanel}>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                    <p className={styles.tituloItem}>HTML</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <p className={styles.tituloItem}>CSS</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
                    <p className={styles.tituloItem}>Tailwind</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <p className={styles.tituloItem}>JavaScript</p>
                </div><div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                    <p className={styles.tituloItem}>TypeScript</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
                    <p className={styles.tituloItem}>Node</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                    <p className={styles.tituloItem}>GitHub</p>
                </div>
                {/* <div className={styles.itemCont}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <p className={styles.tituloItem}>MongoDB</p>
            </div> */}

                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <p className={styles.tituloItem}>React</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
                    <p className={styles.tituloItem}>React Native</p>
                </div>

                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                    <p className={styles.tituloItem}>PostgreSQL</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" />
                    <p className={styles.tituloItem}>MySQL</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="framer motion.svg" alt="Framer Motion" />
                    <p className={styles.tituloItem}>Framer Motion</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="react spring.svg" alt="React Spring" />
                    <p className={styles.tituloItem}>React Spring</p>
                </div>
                <div className={styles.itemCont}>
                    <img src="vercel.svg" alt="Vercel" />
                    <p className={styles.tituloItem}>Vercel</p>
                </div>
                {/* <div className={styles.itemCont}>
                <img src="nextjs.svg" alt="Next.js" />
                <p className={styles.tituloItem}>Next.js</p>
            </div> */}
            </div>
        </motion.div>
    )
}

export default SkillsProfile