import { Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav>
      <h2>Mi Tienda</h2>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronica">Electrónica</Link></li>
        <li><Link to="/category/ropa">Ropa</Link></li>
        <li><Link to="/category/hogar">Hogar</Link></li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar