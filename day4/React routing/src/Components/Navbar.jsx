import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#a0bd21ff" }}>
        <h1>Loire</h1>
      <Link to="/" style={{ margin: "10px" , color: "red"}}>Home</Link>
      <Link to="/user" style={{ margin: "10px", color:"red" }}>User</Link>
      <Link to="/about" style={{ margin: "10px", color:"red" }}>About</Link>
      <Link to="/contact" style={{ margin: "10px", color:"red" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;