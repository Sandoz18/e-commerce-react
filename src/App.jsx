
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter'


   { /**puedo retornar un único elemento, para esto existen <> </> (fragment) que es agrupador de elementos */  }
{ /**las llaves Button label= {''}solo se necesitan para números, objetos o booleanos, para strings no son necesarias**/  }
function App() {
 
  return (
 
    <> 
      <Navbar/>      
   <Home/>  
 <ItemListContainer text=''/>
<Counter/>
    </>
  )
}

export default App
