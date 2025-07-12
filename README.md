🚀 Proyecto Final: Cúbika E-commerce
Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con React, diseñada para ofrecer una experiencia de compra fluida y dinámica. Utiliza Firebase Firestore como base de datos para gestionar el catálogo de productos y registrar las transacciones de los usuarios.

✨ Características Principales
Listado y Detalle de Productos:
Generación dinámica del listado de productos (ItemListContainer e ItemList). 📦
Acceso a la vista en detalle de cada producto (ItemDetailContainer e ItemDetail). 🔍
Separación de responsabilidades entre componentes contenedores y de presentación. 🧩

Gestión de Cantidades:
Implementación del componente ItemCount que permite seleccionar la cantidad de unidades a agregar al carrito y realiza las validaciones necesarias (valor mínimo, límite por stock, etc.). 🔢
Oculta el componente ItemCount en ItemDetail luego de agregar un producto al carrito. 🚫

Navegación:
Navegación fluida entre las secciones de catálogo, categorías, detalle de producto, carrito y checkout, utilizando React Router. ➡️
Navegación mediante enlaces en el componente NavBar, respetando el modelo Single Page App (sin que se generen recargas de la página del navegador). ⚡

Carrito de Compras:
Almacenamiento del estado de carrito de compras mediante Context. 🛒
Muestra el contenido del carrito (Cart y CartItem) incluyendo productos, cantidades, subtotales y totales. 📊
CartWidget muestra el total de unidades agregadas al context. 🛍️

Base de Datos Firebase Firestore:
Implementación de Firestore como base de datos. ☁️
Creación de una colección donde se almacene la información de todos los productos del e-commerce, y realización de las consultas desde React para mostrarlos en la app. 💾
Generación de un documento en Firestore al confirmar una compra, registrando los detalles de la misma. 🧾

Experiencia de Usuario (UX):
Utilización de renderizado condicional para mostrar loaders (ej. "Cargando..."), y mensajes condicionales (ej. “producto sin stock”, “carrito vacío”, etc.). ⏳
Como finalización de la experiencia de usuario, se le brinda al usuario el ID de la orden generada en Firestore. ✅

Buenas Prácticas:
Respeto de convenciones y consignas del curso para los nombres de variables, funciones, componentes, eventos y arquitectura de carpetas/archivos. 📝
Creación de un documento en formato markdown documentando brevemente el proyecto. 📄
Uso de Custom Hooks (ej. useCart) para encapsular lógica. 🎣

🛠️ Tecnologías Utilizadas
Aquí se listan las principales tecnologías y librerías que hacen posible este proyecto, con enlaces a su documentación oficial para mayor referencia:
React: Biblioteca principal para la construcción de la UI.

React Router DOM, React Router: Para la navegación entre rutas.

Firebase: Base de datos NoSQL en la nube.

Bootstrap, React-Bootstrap: Para estilos y componentes UI.

Bootstrap Icons: Para iconos.

React Icons: Para iconos.

React Hot Toast: Para notificaciones.

React Spinners: Para componentes de carga.

@emotion/react, @emotion/styled: Para estilos avanzados (si se usan).

Styled Components: Para estilos avanzados (si se usan).

@mui/material: Para componentes UI de Material-UI (si se usan).

📂 Estructura de Componentes
La aplicación sigue una estructura de componentes recomendada para la separación de responsabilidades, facilitando la organización y el mantenimiento del código:

src/
├── assets/ 🖼️
├── components/ 🧩
│   ├── Cart/ 🛒
│   │   ├── Cart.jsx             // Contenedor principal del carrito
│   │   └── CartItem.jsx         // Componente para cada producto individual en el carrito
│   ├── CheckoutForm/ 📝
│   ├── EmptyCart/               // (Si se extrae el componente de carrito vacío) 🗑️
│   ├── HeroSection/ ✨
│   ├── ItemCount/ 🔢
│   ├── ItemDetail/ 🔍
│   │   ├── ItemDetail.jsx
│   │   └── ItemDetail.module.css
│   ├── ItemDetailContainer/ 📦
│   ├── ItemList/ 📋
│   │   ├── Item.jsx
│   │   ├── ItemList.jsx
│   │   └── ItemList.module.css
│   ├── ItemListContainer/ 🛍️
│   ├── Navbar/ 🧭
│   │   ├── CartWidget/ 🛒
│   │   │   └── CartModal.jsx
│   │   └── Navbar.jsx
│   └── SocialMediaIcons/ 🌐
├── context/ 💡
│   └── CartContext.jsx          // Contexto para el estado global del carrito (incluye useCart)
├── firebase/ 🔥
│   ├── Config.js                // Configuración de Firebase
│   └── db.js                    // Funciones de interacción con Firestore (getProducts, getProductById, etc.)
├── App.css 🎨
├── App.jsx ⚛️
└── index.js 🚀

🚀 Instalación y Ejecución Local
Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

Clona el repositorio:
git clone [URL_DE_TU_REPOSITORIO]
cd ProyectoFinal+Apellido

Instala las dependencias:
npm install

Las principales dependencias utilizadas en este proyecto son:
react, react-dom
react-router-dom, react-router
firebase
bootstrap, react-bootstrap, bootstrap-icons
react-icons
react-hot-toast
react-spinners
@emotion/react, @emotion/styled, styled-components
@mui/material

Configura Firebase:
Crea un proyecto en Firebase y configura Firestore.
Obtén tus credenciales de configuración de Firebase.
Crea un archivo src/firebase/Config.js (o actualiza el existente) con tus credenciales:
// src/firebase/Config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

export const app = initializeApp(firebaseConfig);

Asegúrate de que tu colección de Firestore se llame productos y contenga documentos con campos como nombre, descripcion, precio (como Number), stock (como Number), imagen (URL), categoria, marca (si aplica).

Inicia la aplicación:
npm start
La aplicación se abrirá en tu navegador en http://localhost:3000 (o el puerto que Vite/Create React App configure).
🛒 Uso de la Aplicación
Descubre cómo interactuar con tu e-commerce:
Navegación: Utiliza la barra de navegación para explorar el catálogo completo o filtrar productos por categoría.

Detalle de Producto: Haz clic en cualquier producto en el listado para ver su ficha detallada, añadir unidades al carrito y ver su stock.

Carrito de Compras: El icono del carrito en la barra de navegación muestra la cantidad de ítems. Haz clic para abrir el modal del carrito, donde podrás ver los productos agregados, ajustar cantidades, eliminar ítems y ver el total de tu compra.

Finalizar Compra: Desde el carrito, haz clic en "Finalizar compra" para proceder al checkout (implementación del formulario y generación de orden pendiente).

📚 Documentación Adicional
Firebase Firestore: Los datos de productos se almacenan en la colección productos. Las órdenes de compra se registrarán en una colección orders (a implementar en el checkout).


Desarrollado por : Irene Imbriani Diez
✉️ Contacto
[ireneimdiez@gmail.com]