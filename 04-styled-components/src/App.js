import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { ProductsContainer, ProductsGrid } from './components/styled/ProductCard.styled';
import { lightTheme, darkTheme } from './theme';

// Dados mockados dos produtos
const mockProducts = [
  {
    id: 1,
    title: 'Smartphone XYZ com câmera de alta resolução e bateria de longa duração',
    price: 899.99,
    rating: 4.5,
    tag: 'Novo',
    image: 'https://picsum.photos/300/300?random=1'
  },
  {
    id: 2,
    title: 'Fone de Ouvido Bluetooth Premium com cancelamento de ruído',
    price: 249.99,
    rating: 4.2,
    tag: 'Promo',
    image: 'https://picsum.photos/300/300?random=2'
  },
  {
    id: 3,
    title: 'Smartwatch Inteligente com monitor de saúde',
    price: 199.99,
    rating: 4.7,
    image: 'https://picsum.photos/300/300?random=3'
  },
  {
    id: 4,
    title: 'Tablet Android com tela de 10 polegadas e 128GB de armazenamento',
    price: 459.99,
    rating: 4.0,
    tag: 'Novo',
    image: 'https://picsum.photos/300/300?random=4'
  },
  {
    id: 5,
    title: 'Caixa de Som Portátil à prova d\'água',
    price: 129.99,
    rating: 4.3,
    image: 'https://picsum.photos/300/300?random=5'
  },
  {
    id: 6,
    title: 'Teclado Mecânico para Gamers com RGB',
    price: 159.99,
    rating: 4.8,
    tag: 'Promo',
    image: 'https://picsum.photos/300/300?random=6'
  }
];

function App() {
  const [theme, setTheme] = useState('light');
  const [cartItemsCount, setCartItemsCount] = useState(3);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Simular carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="App">
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          cartItemsCount={cartItemsCount} 
        />
        <ProductsContainer>
          <ProductsGrid>
            {loading ? (
              // Exibir esqueletos durante o carregamento
              Array(6).fill(0).map((_, index) => (
                <ProductCard key={index} loading={true} />
              ))
            ) : (
              // Exibir produtos reais
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </ProductsGrid>
        </ProductsContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;