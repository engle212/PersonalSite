import { useState } from 'react'

function NavBar() {
  return (
    <header>
      <nav className="navigation">
        <h1>John's Corner of the Internet</h1>
        <span className="material-symbols-outlined size-30"><a href="/resume">&#xE873;</a></span>
      </nav>
    </header>
  )
}

export default NavBar