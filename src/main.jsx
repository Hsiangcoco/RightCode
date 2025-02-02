import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/assets/scss/App.scss'
import { BrowserRouter } from 'react-router-dom'

const basename = process.env.NODE_ENV === 'production' ? '/RightCode' : './';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
