import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

function CartWidget() {

  const { cart } = useContext(CartContext)

  const totalCantidad = cart.reduce((acc, item) => acc + item.cantidad, 0)

  return (
    <div>
      🛒 ({totalCantidad})
    </div>
  )
}


export default CartWidget