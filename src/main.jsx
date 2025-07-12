import 'bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  ThemeProvider  from './providers/ThemeProvider'; 
import  CartProvider  from './providers/CartProvider'; 
import { Toaster } from 'react-hot-toast';

//Este es mi archivo principal el entry point de la app

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
<ThemeProvider>
  <CartProvider>
    <App />
    <Toaster toastOptions={{ style: { zIndex: '999999999' } }} /> 
    </CartProvider>
  </ThemeProvider>
  </StrictMode>,
)
