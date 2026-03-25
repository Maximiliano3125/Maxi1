import { useState } from "react"

function CheckoutForm({ onConfirm }) {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const datos = {
      nombre,
      email
    }

    onConfirm(datos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Datos del comprador</h3>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Confirmar compra</button>
    </form>
  )
}

export default CheckoutForm