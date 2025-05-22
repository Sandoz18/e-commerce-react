
import React from "react"

/**las llaves con label dentro son la desestructuración de props */
/*un archivo no debería tener más de un componente, en este caso botón y sus diferentes estados*/ 
function Button ({label, bg }) {
    return(
        <button style={{backgroundColor: bg }}>{label} {2+1484}</button>
    ) 
}

/* ver cómo se hace el hover del botón!!!
 const ButtonHovered= ({label, onClick}){
 }*/


/*El default tambien puede ponerse en la función del componente Button*/ 
export default Button