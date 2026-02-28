import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

const productosMock = [
  { id: 1, nombre: "TV", categoria: "electronica" },
  { id: 2, nombre: "Notebook", categoria: "electronica" },
  { id: 3, nombre: "Remera", categoria: "ropa" },
  { id: 4, nombre: "Silla", categoria: "hogar" },
]

function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosMock)
      }, 500)
    })

    obtenerProductos.then((res) => {
      if (categoryId) {
        setProductos(res.filter(prod => prod.categoria === categoryId))
      } else {
        setProductos(res)
      }
    })

  }, [categoryId])

  return (
  <div>
    <h1>{greeting}</h1>
    <ItemList productos={productos} />
  </div>
  )
}

export default ItemListContainer