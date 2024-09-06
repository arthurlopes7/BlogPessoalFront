
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Router>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                minHeight: '100vh', 
                width: '100%', 
                margin: 0,     
                padding: 0     
            }}>
                <Navbar />
                <main style={{ 
                    flex: 1, 
                    backgroundColor: '#2E2E2E', 
                    color: '#C0C0C0', 
                    padding: '20px',
                    width: '100%', 
                }}>
                    <Home />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
