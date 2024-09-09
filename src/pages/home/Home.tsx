
import React, { useState } from 'react';

interface HomeProps {
  title: string;
}

function Home({ title }: HomeProps) {
  const [message, setMessage] = useState<string>('Publique sua opinião no Blog DEV Arthur');

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 100px)', 
      backgroundColor: '#3F3F3F', 
      padding: '0 20px',
      boxSizing: 'border-box',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        maxWidth: '1200px',
        width: '100%',
        color: '#E5E5E5', 
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
            color: '#D8A9F2', 
          }}>
            {title}
          </h2>
          <p style={{ fontSize: '1.25rem' }}>
            {message}
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
          }}>
            <div style={{
              borderRadius: '8px',
              border: '2px solid #D8A9F2', 
              padding: '10px 20px',
              cursor: 'pointer',
              color: '#E5E5E5', 
              backgroundColor: '#4B0082',
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
              border: '5px solid #D8A9F2', 
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;