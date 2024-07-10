import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import proj from "../proyects.json"

export const PortfolioContext = createContext();

export function PortfolioContextProvider(props) {

    const [menuH, setMenuH] = useState(false)
    const [scrollH, setScrollH] = useState(false)
    const [proyectos, setProyectos] = useState(proj)

  return (
    <PortfolioContext.Provider value={{menuH, scrollH, proyectos, setProyectos, setScrollH, setMenuH}}>
        {props.children}
    </PortfolioContext.Provider>
  )
}
