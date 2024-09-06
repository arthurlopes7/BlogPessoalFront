// App.tsx
import React from 'react';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home title="Seja Bem Vindo!" />
      <Footer />
    </>
  );
}

export default App;
