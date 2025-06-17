
import './App.css'
import TopBanner from './components/TopBanner/TopBanner';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

{/*El <button> as={link} lo puedo usar para mi carrito de compras ver de implementarlo*/}
{ /**puedo retornar un único elemento, para esto existen <> </> (fragment) que es agrupador de elementos */ }
{ /**las llaves Button label= {''}solo se necesitan para números, objetos o booleanos, para strings no son necesarias**/ }
//lo que pongo fuera de Routes aparece en todas las vistas
{/*// por fuera de las rutas pongo los componentes que van en todas las páginas*/ }
//en la primer path está la ruta raíz no necesita poner /home
//category me permite usar el mismo json para todo y puedo filtrar etc etc 😎

function App() {

  return (
    <>
    {/*Dentro de este fragmento agrupo los elementos*/ }
      <BrowserRouter>
    {/*Componentes que se agregan en todas las vistas*/ }
        <TopBanner />
        <Navbar />
        <SocialMediaIcons />


        <Routes>
            {/*Acá es dónde se renderiza e intercambian componentes según la vista
            como Home es la ruta raíz no tengo que poner el path pero si el element que estoy pasando
            que es Home, y por eso tambien la diferencia de como se pasa con los otros componentes que
            si son rutas y por eso van con minúsculas*/ }
          <Route path="/" element={ <Home/>} />
              {/*RUTAS DINÁMICAS, uno sola ruta para obtener acceso a todas  */}
                     
              <Route path="/category/:categoryName" element={<ItemListContainer/>}/>
              <Route path="/item/:id" element={<ItemDetailContainer/>}/>
             

              {/*El ruteo de las subpáginas por convención va con minusculas y guión (kebab-case)*/ }
          <Route path="/ItemListContainer" element={<ItemListContainer text='Nuestros Productos' />} />
           <Route path="/muebles" element={<ItemListContainer text='Nuestros Productos' />} />
           <Route path="/espacios" element={<ItemListContainer text='Nuestros Productos' />} />
           <Route path="/deco" element={<ItemListContainer text='Nuestros Productos' />} />
           <Route path="/ofertas" element={<ItemListContainer text='Nuestros Productos' />} />
        </Routes>
         {/*//el footer va al cerrar el browser para que se vea abajo*/ }
        <Footer />
      </BrowserRouter>
      {/* 
     
      <Counter />*/ }
    </>
  )
}

export default App
