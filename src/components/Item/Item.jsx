import { Link } from "react-router-dom"

function Item({ producto }) {
  return (
    <div>
      <Link to={`/item/${producto.id}`}>
        <h4>{producto.nombre}</h4>
      </Link>
    </div>
  )
}

export default Item