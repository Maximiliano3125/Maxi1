import { Link } from "react-router-dom"

function Item({ producto }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px",
      width: "200px",
      textAlign: "center"
    }}>
      <img
        src={producto.img}
        alt={producto.nombre}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h4>{producto.nombre}</h4>
      <p>${producto.precio}</p>

      <Link to={`/item/${producto.id}`}>
        <button style={{
            padding: "8px",
            marginTop: "10px",
            cursor: "pointer"
           }}>
          Ver detalle
        </button>
      </Link>
    </div>
  )
}

export default Item