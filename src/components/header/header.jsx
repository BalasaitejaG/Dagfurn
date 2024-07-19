import React, { useState } from 'react'
import './header.css'
const header = () => {
  const[menu,setMenu]=useState('menu')
  return (
    <div className='header'>
        <div className='headerContents'>
            <h2>Order your favorite foods form here</h2>
            <p>Get your favorite foods at your doorstep</p>
            <button><a href="#ExploreMenu" onClick={() => setMenu("menu")}>View Menu</a></button>
        </div>
    </div>
  )
}

export default header