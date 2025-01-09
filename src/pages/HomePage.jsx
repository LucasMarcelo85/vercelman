import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import Carousel from '../components/Carousel'; // Importando o componente
import ClothingBanners from '../components/ClothingBanners';
import QuadrupleBanners from '../components/QuadrupleBanners';

const HomePage = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      <main>

        
        {/* Adicionando o carrossel abaixo do banner */}
        <section className="carousel-section">
          <Carousel />
        </section>

        <ProductGrid addToCart={addToCart} />
        <ClothingBanners/>
        <QuadrupleBanners/>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
