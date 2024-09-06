
import React from 'react';

function Footer() {
    return (
        <footer style={{
            width: "100%", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#4B0082",
            padding: "10px 0",
            boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.3)",
            color: "#FFF",
            position: "relative",
            bottom: "0",
            left: "0",
            marginTop: 'auto', 
            boxSizing: 'border-box' 
        }}>
            <p style={{ margin: "0", fontSize: "14px" }}>
                © 2024 DEV Arthur. Todos os direitos reservados.
            </p>
        </footer>
    );
}

export default Footer;
