import  { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const HomePage = () => {
  // Estado do carrinho movido para o HomePage
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Função para remover um produto do carrinho
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div>
      {/* Passando cartItems e removeFromCart para o Header */}
      <Header cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      <main>
        <section className="banner">
          <h1>Vercel Man</h1>
          
        </section>
        
        {/* Passando a função addToCart para o ProductGrid */}
        <ProductGrid addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
