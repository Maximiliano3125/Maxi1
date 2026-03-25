import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./components/CartContext/CartContext"
import Cart from "./components/Cart/Cart"

function App() {
  return (
    <CartProvider>
     <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>

     </BrowserRouter>
    </CartProvider>
  )
}

export default App