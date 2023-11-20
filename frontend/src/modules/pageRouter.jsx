import React from 'react'

import {HashRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/homePage'
import JournalPage from './pages/journalPage'

export default function PageRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
        <Route exact path="/journal" 
          element={<JournalPage></JournalPage>}></Route>
      </Routes>
    </Router>
  )
}
