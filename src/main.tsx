import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <HashRouter>
      <App />
    </HashRouter>

    <MemoryRouter>
      <App />
    </MemoryRouter>
    
    <StaticRouter location='/'>
      <App />
    </StaticRouter> */}
    
  </React.StrictMode>,

  

)
