import './footer.css'
import { RiHome2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsCartDash } from "react-icons/bs";

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="h-20 border-4 flex justify-around items-center">
        <Link to='/' title='home'>
            <RiHome2Line size={25}/>  
        </Link>
        <Link to='cart' title='cart'>
            < BsCartDash size={25}/>
        </Link>
        <Link to='wishlist' title='wishlist'>
            <MdOutlinePlaylistAdd size={25}/>
        </Link>
        <Link to='message' title='message'>
            <TiMessages size={25} />
        </Link>
        <Link to='profile' title='profile'>
            <FaRegUser size={25} />
        </Link>
    </footer>
  )
}

export default Footer