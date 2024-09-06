
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            width: "100%", // Garantindo que a largura seja 100%
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#4B0082",
            padding: "10px 0",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            color: "#FFF",
            margin: 0,
            boxSizing: 'border-box' // Incluindo o preenchimento e a borda na largura total
        }}>
            <Link to="/" style={{ textDecoration: "none", color: "#FFF", fontWeight: "bold", fontSize: "18px" }}>Home</Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#FFF", fontWeight: "bold", fontSize: "18px" }}>Sobre</Link>
            <Link to="/contact" style={{ textDecoration: "none", color: "#FFF", fontWeight: "bold", fontSize: "18px" }}>Contato</Link>
        </nav>
    );
}

export default Navbar;

