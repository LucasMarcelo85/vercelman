import { useState, useEffect } from 'react';



const Carousel = () => {
  const images = [
    '/banner1.jpeg',
    '/footer.jpeg',
    '/icone.jpeg',
    
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática das imagens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Alterar a cada 3 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  // Mudar a imagem ao clicar nos pontos
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : 'inactive'}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'dot active' : 'dot'}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <style>{`
        .carousel {
          position: relative;
          width: 100%;
          max-width: 1500px;
          margin: auto;
        }
        .carousel-images img {
          width: 100%;
        }
        .carousel-dots {
          text-align: center;
          margin-top: 10px;
        }
        .dot {
          height: 15px;
          width: 15px;
          margin: 0 5px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.6s ease;
        }
        .active {
          background-color: #717171;
        }
        .dot:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
