import { BrowserRouter, Routes, Route } from "react-router-dom";


import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Error404 } from "./components/Error404";

import './App.css'


function App () {
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route 
      path="/" 
      element = {<ItemListContainer greeting = 'HOLA'/>} />
      <Route
      path='/category/:id'
      element={<ItemListContainer greeting = 'category'/>}   />
      <Route
      path='/items/:id'
      element={<div>Detalle</div>}     />
      <Route
      path='*'
      element={<Error404 />}      />
      
    </Routes>
  
  </BrowserRouter>
  );
}
export default App
