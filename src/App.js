import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Router } from './Utils/Router'

function App() {
  return (
    <Routes>
      {
        Router.map((val, index) => {
          return (<Route key={index} path={val.path} element={val.page} />)
        })
      }
    </Routes>
  )
}

export default App