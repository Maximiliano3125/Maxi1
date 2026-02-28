import Item from "../Item/Item"

function ItemList({ productos }) {
  return (
    <div>
      {productos.map(prod => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ItemList