import { Outlet } from 'react-router-dom'
import About from './About'
import React from 'react'
import Nav from './Nav'

export default function App() {
  return (
    <>
      <div>
        <Nav />
        <Outlet />
      </div>
    </>
  )
}
