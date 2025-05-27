
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

   { /**puedo retornar un único elemento, para esto existen <> </> (fragment) que es agrupador de elementos */  }
{ /**las llaves Button label= {''}solo se necesitan para números, objetos o booleanos, para strings no son necesarias**/  }
function App() {
 
  return (
 
    <> 
      <Navbar/>
   <Home/>
 <ItemListContainer/>

    </>
  )
}

export default App
