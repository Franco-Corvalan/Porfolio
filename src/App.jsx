import React from 'react';
import Header from './components/Header/Header';
import Backscreen from './components/Backscreen/Backscreen';
import HomePage from "./components/HomePage/HomePage"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import MenuH from './components/MenuH/MenuH';
import { useState, useContext } from "react"
import { PortfolioContext } from "./Context/PortfolioContext"
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';
import styles from "./app.module.css";

function App() {

const { setScrollH, menuH } = useContext(PortfolioContext);
const [scrollTop, setScrollTop] = useState(0);

function handleScroll(e) {
  setScrollTop(window.scrollY);

  if (scrollTop > 50){
    setScrollH(true)
  }
  else{
    setScrollH(false)
  }
}

window.addEventListener("scroll", handleScroll)

  return (
    <div className={styles.App}>
      <Header></Header>
      {menuH === true && <MenuH></MenuH>}
      <Backscreen></Backscreen> 
      <HomePage></HomePage>
      <About></About>
      <Proyectos></Proyectos>
      <Contacto></Contacto>     
      <Footer></Footer>
    </div>
  )
}

export default App