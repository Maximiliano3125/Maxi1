import { Link } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      background: "#222",
      color: "white"
    }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>Inicio</Link>
        <Link to="/category/electronica" style={{ color: "white" }}>Electrónica</Link>
        <Link to="/category/ropa" style={{ color: "white" }}>Ropa</Link>
        <Link to="/category/hogar" style={{ color: "white" }}>Hogar</Link>
      </div>

      <Link to="/cart" style={{ color: "white" }}>
        <CartWidget />
      </Link>
    </nav>
  )
}

export default NavBar