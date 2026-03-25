import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {

  const [producto, setProducto] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {

    const productoRef = doc(db, "productos", itemId)

    getDoc(productoRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ id: res.id, ...res.data() })
        } else {
          console.log("No existe el producto")
        }
      })
      .catch(error => console.log(error))

  }, [itemId])

  if (!producto) {
    return <h2>Cargando...</h2>
  }

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer