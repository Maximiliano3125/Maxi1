import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (producto, cantidad) => {
    const existe = cart.find(item => item.id === producto.id)

    if (existe) {
      const nuevoCart = cart.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      )
      setCart(nuevoCart)
    } else {
      setCart([...cart, { ...producto, cantidad }])
    }
  }

   const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.cantidad * (item.precio || 0),
      0
    )
  }

  const getQuantityById = (id) => {
    const item = cart.find(prod => prod.id === id)
    return item ? item.cantidad : 0
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      getTotal,
      getQuantityById,
      removeItem 
    }}>
      {children}
    </CartContext.Provider>
  )
}