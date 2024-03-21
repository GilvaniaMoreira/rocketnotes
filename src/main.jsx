import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import Globalstyles from './styles/global';

import theme from './styles/theme'

import { Home } from './pages/Home'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
