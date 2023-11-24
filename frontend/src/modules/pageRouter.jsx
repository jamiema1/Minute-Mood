import React from 'react'

import {HashRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from './pages/homePage'
import JournalPage from './pages/journalPage'

import {useAuth0} from "@auth0/auth0-react"

export default function PageRouter() {
  const {isAuthenticated, loginWithRedirect} = useAuth0()

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage></HomePage>}></Route>
        {isAuthenticated && (<Route exact path="/journal" 
          element={<JournalPage></JournalPage>}></Route>)}
        {!isAuthenticated && (
          <Route
            path="/*"
            Component={() => {
              loginWithRedirect()
              return null
            }}
          ></Route>
        )}
      </Routes>
    </Router>
  )
}
