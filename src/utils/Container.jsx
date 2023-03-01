import React from 'react'
import { NavLink } from 'react-router-dom'

const Container = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

const IconButton=({link , title , icon})=>{
    return(
        <NavLink className="iconButton__link" to={link}>
          {icon}
          {title}
          </NavLink>
    )
}

const ButtonIcon=({className,title,icon})=>{
  return(
   <>
      <button className={className}>
        
        {title}
        {icon}
    </button>
   </>
  )
}
const Button = ({type, title, icon}) => {
  return (
    <button className='main-button' type={type}>
        {icon}
        {title}
    </button>
  )
}


export {Container , IconButton,ButtonIcon,Button} 