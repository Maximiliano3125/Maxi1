import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const productosMock = [
  { id: 1, nombre: "TV", categoria: "electronica", descripcion: "Smart TV 50 pulgadas" },
  { id: 2, nombre: "Notebook", categoria: "electronica", descripcion: "Notebook 16GB RAM" },
  { id: 3, nombre: "Remera", categoria: "ropa", descripcion: "Remera algodón" },
  { id: 4, nombre: "Silla", categoria: "hogar", descripcion: "Silla ergonómica" },
]

function ItemDetailContainer() {

  const [producto, setProducto] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {

    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosMock.find(prod => prod.id === Number(itemId)))
      }, 500)
    })

    obtenerProducto.then(res => setProducto(res))

  }, [itemId])

  if (!producto) {
   return <h2>Cargando...</h2>
   }

   return (
    <ItemDetail producto={producto} />
   )
}

export default ItemDetailContainer