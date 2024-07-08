import { IconButton } from "@mui/material"
import { NavLink } from "react-router-dom"
import {Icon} from "@iconify/react"
import { headerIcon } from "../assets"

const Header = () => {
  return (
    <header className="w-screen bg-pri h-32 text-black flex px-4 pb-4">
        <div className="w-1/5 flex items-center justify-center">
            <img src={headerIcon} alt="" className="md:w-1/3"/>
        </div>
        <nav className="flex w-full items-end justify-between">
            <div className="space-x-4" >
                <NavLink to="/" className={({isActive}) => `${isActive ? "text-white underline" : ""}`}>Home</NavLink>
                <NavLink to="/shop" className={({isActive}) => `${isActive ? "text-white" : ""}`}>Shop</NavLink>
            </div>
            <div>
                <IconButton>
                    <Icon icon="material-symbols:search" className="text-3xl"/>
                </IconButton>
                <IconButton>
                    <Icon icon="mdi:cart" className="text-3xl"/>
                </IconButton>
                <IconButton>
                    <Icon icon="ph:user" className="text-3xl"/>
                </IconButton>
            </div>
        </nav>
    </header>
  )
}
export default Header