import Item from "../Item/Item"

function ItemList({ productos }) {
  return (
   <div style={{
     display: "flex",
     flexWrap: "wrap",
     justifyContent: "center",
     gap: "20px"
  }}>
      {productos.map(prod => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ItemList