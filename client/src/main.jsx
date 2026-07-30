import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { i18nReady } from './i18n/index.js'

const mount = () =>
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

// ar/it translations are lazy chunks now, so wait for the detected language to land
// before mounting. English is bundled, so this resolves in a microtask for most
// visitors (and for the prerenderer). If it ever rejects, mount anyway — English
// fallback copy beats a blank page.
i18nReady.then(mount).catch((err) => {
  console.error('[i18n] init failed, mounting with fallback copy:', err)
  mount()
})
