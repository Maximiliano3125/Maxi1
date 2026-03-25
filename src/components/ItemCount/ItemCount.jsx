import { useState } from "react"

function ItemCount({ initial = 1, stock = 10, onAdd }) {
  const [count, setCount] = useState(initial > stock ? stock:initial)

  const incrementar = () => {
    if (count < stock) setCount(count + 1)
  }

  const decrementar = () => {
    if (count > 1) setCount(count - 1)
  }

  if(stock === 0){
    return <p>Sin stock</p>
  }

  return (
    <div>
      <button onClick={decrementar} disabled={count === 1} style={{ padding: "5px" }}>-</button>
      <span>{count}</span>
      <button onClick={incrementar} disabled={count === stock} style={{ padding: "5px" }}>+</button>

      <div>
        <button onClick={() => onAdd(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount