import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './index.css'

import './scss/yena.css'
import './scss/soyoung.css'
import './scss/hd.ej.scss'
import './scss/quickicon.hyuna.scss'
import './scss/jeaeun.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
