import React from 'react'
import styles from "./Contacto.module.css"
import {useRef, useState, useEffect} from 'react'
import {useInView, motion} from "framer-motion"

function Contacto() {

  /^[a-zA-ZA-y\s]{1,40}$/

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [enviado, setEnviado] = useState(2)
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [validadoN, setValidadoN] = useState(4)
  const [validadoC, setValidadoC] = useState(4)
  const [validadoA, setValidadoA] = useState(4)

  function checkearN (valor) {
    if (valor === ""){
      setValidadoN(0)
    }
    else if (!/^[a-zA-Z0-9\_\-\s]{1,20}$/.test(valor)){
      setValidadoN(1)
    }
    else{
      setValidadoN(2)
    }
  }
  function checkearC (valor) {
    if (valor === ""){
      setValidadoC(0)
    }
    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor)){
      setValidadoC(1)
    }
    else{
      setValidadoC(2)
    }
  }
  function checkearA (valor) {
    if (valor === ""){
      setValidadoA(0)
    }
    else if (!/^[a-zA-Z0-9\_\-\s]{1,200}$/.test(valor)){
      setValidadoA(1)
    }
    else{
      setValidadoA(2)
    }
  }

  function handleSubmit(e) {
    

    if (validadoN === 2 && validadoC === 2 && validadoA === 2){
      setEnviado(1)
    }
    else{
      setEnviado(0)
    }
  }

  return (
    <div className={styles.Contacto} id='icontacto' >
        <motion.div className={styles.back} animate={isInView ? {backgroundColor: "rgba(0, 0, 0, 0)"} : {backgroundColor: "rgba(0, 0, 0, 1)"}} transition={{delay: 0.5, duration: 0.5, ease: "easeOut"}}>
            <motion.div className={styles.formCont} ref={ref} animate={isInView ? {scale: 1, opacity: 1} : {scale: 0.8, opacity: 0}} transition={{delay: 1, duration: 0.5, ease: "easeOut"}}>
              <form action="https://formsubmit.co/edbf23bce691cb77ccdbb5781b8a0184" method="POST" onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.titulo}>Contacto</div>
                <div className={styles.fieldCont}>
                  <label htmlFor="nombre">Nombre</label>
                  <input type="text" id='nombre' name='nombre' placeholder='Ingrese su nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} onBlur={(e) => checkearN(e.target.value)}/>
                  {validadoN === 0 && <div className={styles.error}>No ingresó ningún nombre</div>}
                  {validadoN === 1 && <div className={styles.error}>Solo se permiten letras, numeros, espacios y guiones. 20 caracteres máximos.</div>}
                </div>
                <div className={styles.fieldCont}>
                  <label htmlFor="pass">Correo Electrónico</label>
                  <input type="text" id='pass' name='email' placeholder='Ingrese su correo electrónico' value={correo} onChange={(e) => setCorreo(e.target.value)} onBlur={(e) => checkearC(e.target.value)}/>
                  {validadoC === 0 && <div className={styles.error}>No ingresó ningún correo electrónico</div>}
                  {validadoC === 1 && <div className={styles.error}>No es un correo electrónico valido.</div>}
                </div>
                <div className={styles.areaCont}>
                  <label htmlFor="area1">Mensaje</label>
                  <textarea name="message" id="area1" cols="30" rows="10" placeholder='Ingrese su mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} onBlur={(e) => checkearA(e.target.value)}></textarea>
                  {validadoA === 0 && <div className={styles.error}>No ingresó ningún mensaje</div>}
                  {validadoA === 1 && <div className={styles.error}>Solo se permiten letras, numeros, espacios y guiones. 200 caracteres máximos.</div>}
                </div>
                <div className={styles.botonCont}>
                  <button type='submit'>Enviar</button>
                  {enviado === 1 && <div className={styles.correcto}>El mensaje fue enviado.</div>}
                  {enviado === 0 && <div className={styles.error}>Complete los campos correctámente.</div>}
                </div>                
                {/* <input type="hidden" name="_next" value="https://z4nchez.github.io/portfolio"></input>
                <input type="hidden" name="_captcha" value="false"></input> */}
              </form>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Contacto