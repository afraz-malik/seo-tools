import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
