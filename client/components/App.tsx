import { Outlet } from 'react-router-dom'
import About from './About'
import React from 'react'

export default function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}
