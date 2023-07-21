import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <header>
      <p>Euan Cunningham</p>
      <div>
        <table>
          <thead>
            <Link to={'/'}>About | </Link>
            <Link to={'projects'}>Projects | </Link>
            <Link to={'contact'}>Contact</Link>
          </thead>
        </table>
      </div>
    </header>
  )
}
