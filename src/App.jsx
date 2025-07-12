import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './components/TopBanner/TopBanner';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons';
import { CartProvider } from './context/CartContext.jsx';
import  ThemeContext  from './context/ThemeContext.jsx';
import { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout/Checkout.jsx';


function App() {


  return (
    <BrowserRouter>
      <CartProvider>
       
        <TopBanner />
        <Navbar /> 

      

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
         <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
        
        <SocialMediaIcons/>
        <Toaster /> 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;