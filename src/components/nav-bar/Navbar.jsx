// eslint-disable-next-line no-unused-vars
import React,{useState}from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className='logo'/>
        <ul className='navbar-menu'>
            <Link to='/' onClick={() => setMenu("home")} className={menu==="home"? "active":"" }>Home</Link>
            <a href='#ExploreMenu' onClick={() => setMenu("menu")} className={menu==="menu"? "active":"" }>Menu</a>
            <a href='#Footer' onClick={() => setMenu("contactUs")} className={menu==="contactUs"? "active":"" }>Contact Us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar