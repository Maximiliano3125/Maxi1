import { useContext, useState } from "react"
import { CartContext } from "../CartContext/CartContext"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/config"
import CartItem from "../CartItem/CartItem"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

function Cart() {

  const { cart, clearCart, getTotal } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)

  const handleConfirm = (datosUsuario) => {

    const orden = {
      buyer: datosUsuario,
      items: cart,
      total: getTotal(),
      date: new Date()
    }

    const ordenesRef = collection(db, "ordenes")

    addDoc(ordenesRef, orden)
      .then((res) => {
        setOrderId(res.id)
        clearCart()
      })
      .catch(error => console.log(error))
  }

  if (orderId) {
    return (
      <div>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es: {orderId}</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>
  }

  return (
    <div>
      <h2>Carrito</h2>

      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total a pagar: ${getTotal()}</h3>

      <button
        onClick={clearCart}
        style={{
        padding: "10px",
        marginTop: "10px",
        cursor: "pointer"
      }}
    >
        Vaciar carrito
      </button>

      <CheckoutForm onConfirm={handleConfirm} />
    </div>
  )
}

export default Cart