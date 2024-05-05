import React, { useEffect } from 'react'
import { useState } from 'react';
import Logo from '../asset/Logo.png'
import  './header.css'

function Header() {
  const [Theme,Settheme] = useState( JSON.parse(localStorage.getItem("theme")) ||"light")
  useEffect( ()=> {
    localStorage.setItem("theme",JSON.stringify(Theme))
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(Theme)
  }, [Theme])
  return (
    <header>
      <div className='logo'>
         <img src={Logo} alt='saurabh'></img>
         <span>Taskmate</span>
      </div>
      <div className='themeSelector'>
        <span onClick = { ()=> Settheme("light")} className={Theme === "light" ? "light activeTheme" : "light"}></span>
        <span onClick = { ()=> Settheme("medium")} className={Theme === "medium" ? "medium activeTheme" : "medium"}></span>
        <span onClick = { ()=> Settheme("dark")} className={Theme === "dark" ? "light activeTheme" : "dark"}></span>
        <span onClick = { ()=> Settheme("gOne")} className={Theme === "gOne" ? "light activeTheme" : "gOne"}></span>
        <span onClick = { ()=> Settheme("gTwo")} className={Theme === "gTwo" ? "light activeTheme" : "gTwo"}></span>
        <span onClick = { ()=> Settheme("gThree")} className={Theme === "gThree" ? "light activeTheme" : "gThree"}></span>
      </div>
    </header>
  )
}

export default Header
