import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<App />}/> */}
        <App />
      {/* </Routes> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
