import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import i18n from './i18n.js'
import {I18nextProvider } from 'react-i18next'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
)
