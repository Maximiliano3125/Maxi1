import { useState } from "react"

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial)

  const incrementar = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrementar = () => {
    if (count > 1) setCount(count - 1)
  }

  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>

      <div>
        <button onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount