import { useState } from 'react'
import '../css/navbar.css'
import menu from '../images/menu.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  function show () {
    setShowMenu(!showMenu)
  }

  
  return (
    <div className="container">
      <nav className="nav">
          <a className="logo" href='/'>My Portfolio</a>
          <ul className={showMenu ? "active-nav-right" : "nav-right"} id='nav-right'>
              <li className="nav-item"><a href='#about'>About</a></li>
              <li className="nav-item"><a href='#skills'>Skills</a></li>
              <li className="nav-item"><a href='#projects'>Projects</a></li>
              <li className="nav-item"><a href='#qualification'>Qualification</a></li>
              <li className="nav-item"><a href='#contact'>Contact</a></li>
          </ul>
          <img src={menu} alt="navigation menu" className='menu' onClick={show}/>
      </nav>
    </div>
  )
}

export default Navbar
