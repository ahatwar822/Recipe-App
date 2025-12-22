import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const Active = ({isActive}) => {
        return `${isActive? "text-red-400":""}`
    }
  return (
    <div className='flex gap-10 text-xl font-thin justify-center m-5'>
        <NavLink to={"/"} className={Active}>Home</NavLink>
        <NavLink to={"/about"} className={Active}>About</NavLink>
        <NavLink to={"/recipes"} className={Active}>Recipes</NavLink>
        <NavLink to={"/create"} className={Active}>Create Recipes</NavLink>
    </div>
)
}

export default Navbar