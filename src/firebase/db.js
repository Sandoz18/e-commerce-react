import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc
} from "firebase/firestore";
import { app } from "./Config";

export const db = getFirestore(app);
export const getProducts = async () => {
  try {
    const productsRef = collection(db, "productos"); 
    const querySnapshot = await getDocs(productsRef); 
    const products = [];

    querySnapshot.forEach((doc) => {     
      products.push({ id: doc.id, ...doc.data() });
    });
    console.log('Productos obtenidos de Firebase (todos):', products);
    return products;
  } catch (error) {
    console.error('Error al obtener todos los productos de Firebase:', error);
    return [];
  }
};


export const getProductsByCategory = async (category) => {
  try {
    const productsRef = collection(db, "productos"); 
    
    // DEBUG
    console.log(`DB: Realizando consulta para la categoría: '${category}'`); 
    const q = query(productsRef, where("categoria", "==", category));
    const querySnapshot = await getDocs(q); 
    const products = [];

    querySnapshot.forEach((doc) => {     
      products.push({ id: doc.id, ...doc.data() });
    });
    console.log(`DB: Productos encontrados para categoría '${category}':`, products);
    return products;
  } catch (error) {
    console.error(`Error al obtener productos de la categoría '${category}' de Firebase:`, error);
    return [];
  }  
};
export const getProductById = async (id) => {
  try {    
    const docRef = doc(db, "productos", id);   
    const docSnap = await getDoc(docRef);
   
    if (docSnap.exists()) {
      console.log("DB: Documento encontrado por ID:", docSnap.data());      
      return { id: docSnap.id, ...docSnap.data() };
    } else {
     
      console.log("DB: ¡No existe tal documento!");
      return undefined;
    }
  } catch (error) {
    console.error(`Error al obtener el producto con ID '${id}' de Firebase:`, error);
    return undefined;
  }
};