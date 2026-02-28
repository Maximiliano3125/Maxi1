function ItemDetail({ producto }) {
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  )
}

export default ItemDetail