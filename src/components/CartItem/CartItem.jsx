import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

function CartItem({ item }) {

  const { removeItem } = useContext(CartContext)

  return (
    <div>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {item.cantidad}</p>
      <p>Subtotal: ${item.cantidad * (item.precio || 0)}</p>

      <button onClick={() => removeItem(item.id)}>
        Eliminar
      </button>
    </div>
  )
}

export default CartItem