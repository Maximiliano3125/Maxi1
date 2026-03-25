import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../CartContext/CartContext"

function ItemDetail({ producto }) {

  const [agregado, setAgregado] = useState(false)
  const { addToCart, getQuantityById } = useContext(CartContext)

  const cantidadEnCarrito = getQuantityById(producto.id)
  const stockDisponible = producto.stock - cantidadEnCarrito

  const handleOnAdd = (cantidad) => {
    addToCart(producto, cantidad)
    setAgregado(true)
  }

  return (
    <div style={{
      border: "1px solid #aaa",
      padding: "20px",
      margin: "20px"
    }}>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>

      {/* 🔥 NUEVO */}
      <p>
        {stockDisponible > 0
          ? `Quedan ${stockDisponible} unidades`
          : "Sin stock"}
      </p>

      {agregado ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : stockDisponible <= 0 ? (
        <p>No hay más stock disponible</p>
      ) : (
        <ItemCount
          initial={1}
          stock={stockDisponible}
          onAdd={handleOnAdd}
        />
      )}
    </div>
  )
}

export default ItemDetail