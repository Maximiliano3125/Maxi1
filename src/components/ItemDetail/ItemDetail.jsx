import ItemCount from "../ItemCount/ItemCount"

function ItemDetail({ producto }) {

  const handleOnAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
  }

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>

      <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
    </div>
  )
}

export default ItemDetail