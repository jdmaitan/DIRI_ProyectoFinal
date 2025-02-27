import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext.tsx'

const basename = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter basename={basename}>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>,
)
