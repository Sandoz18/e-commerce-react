
import './App.css'
import Button from  './components/Button'
import Counter from  './components/Counter'

/**las llaves Button label= {''}solo se necesitan para números, objetos o booleanos, para strings no son necesarias**/
function App() {
 
  return (
    /**puedo retornar un único elemento, para esto existen <> </> (fragment) que es agrupador de elementos */
    <> 
       
   <Counter/>

    </>
  )
}

export default App
