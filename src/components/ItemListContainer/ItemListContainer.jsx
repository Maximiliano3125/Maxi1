import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/config"
import ItemList from "../ItemList/ItemList"

function ItemListContainer() {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {

    const productosRef = collection(db, "productos")

    const consulta = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef

    getDocs(consulta)
      .then((res) => {
        const lista = res.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProductos(lista)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

  }, [categoryId])

  if (loading) return <h2>Cargando productos...</h2>

  return <ItemList productos={productos} />
}

export default ItemListContainer