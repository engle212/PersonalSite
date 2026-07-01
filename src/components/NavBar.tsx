import { useState } from 'react'
import { Link } from 'react-router'

function NavBar() {
  return (
    <header>
      <nav className="navigation">
        <h1>TODO: Add title</h1>
        <span className="material-symbols-outlined size-30"><Link to="/resume">&#xE873;</Link></span>
      </nav>
    </header>
  )
}

export default NavBar