
import React from 'react';

function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 'calc(100vh - 100px)', 
            backgroundColor: '#4F46E5', 
            boxSizing: 'border-box',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                maxWidth: '1200px',
                width: '100%',
                color: 'white',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    textAlign: 'center',
                }}>
                    <h2 style={{
                        fontSize: '3rem',
                        fontWeight: 'bold',
                    }}>
                        Seja Bem Vindo!
                    </h2>
                    <p style={{ fontSize: '1.25rem' }}>
                        Este é o Blog Pessoal do DEV Arthur
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '10px',
                    }}>
                        <div style={{
                            borderRadius: '8px',
                            border: '2px solid white',
                            padding: '10px 20px',
                            cursor: 'pointer',
                        }}>
                            Nova Postagem
                        </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <img
                        src="https://i.imgur.com/VpwApCU.png"
                        alt="Imagem da Página Home"
                        style={{
                            width: '80%',
                            maxWidth: '600px',
                            borderRadius: '8px',
                            border: '5px solid white',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;

