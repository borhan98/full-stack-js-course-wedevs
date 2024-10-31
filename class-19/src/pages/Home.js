import React from 'react';
import "../components/product.css"
import useFetchProducts from '../components/Hooks/useFetchProducts';
import ProductCard from './ProductCard';

const Home = () => {
  const {data: products, isLoading, isError} = useFetchProducts();
  
  if (isLoading) {
    return <p>Loading...!!!</p>
  }

  if (isError) {
    return <p>Error occured when fatching products..!!</p>
  }
  
  return (
    <section className='products-area'>
      <div className='products-wrapper'>
        {
          products.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </section>
  );
};

export default Home;