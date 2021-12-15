import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>,
  document.getElementById('root')
)
