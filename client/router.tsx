import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import About from './components/About'
import React from 'react'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<About />} />
  </Route>
)

export const router = createBrowserRouter(routes)
