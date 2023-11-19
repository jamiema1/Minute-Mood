import React from 'react'

import {HashRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/homePage'

export default function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </Router>
  )
}
