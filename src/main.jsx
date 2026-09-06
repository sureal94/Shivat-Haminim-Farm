import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AccessibilityProvider } from './accessibility/AccessibilityContext'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <AccessibilityProvider>
        <App />
      </AccessibilityProvider>
    </LanguageProvider>
  </StrictMode>,
)
