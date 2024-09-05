function Home() {
    return (
        <div style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2E2E2E", 
            color: "#C0C0C0", 
            padding: "20px", 
            minHeight: "100vh", 
        }}>
            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#6A0D91", 
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", 
            }}>
                <h2 style={{ color: "#D8BFD8" }}>Seja Bem Vindo!</h2> {}
                <p style={{ color: "#D8BFD8" }}>Este é o Blog Pessoal do DEV Arthur</p> {}
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}>
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Imagem da Página Home"
                        width="300px" 
                        style={{ border: "5px solid #D8BFD8", borderRadius: "10px" }} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
