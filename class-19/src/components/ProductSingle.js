import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from './Hooks/useFetchProducts';

const ProductSingle = () => {
  const { id } = useParams();
  const { data: products, isLoading, isError } = useFetchProducts();

  if (isLoading) {
    return "loading...!!";
  }

  if (isError) {
    return "Error...!!";
  }

  const product = products.filter((product => product.id === Number(id)));
  const {image, title, description, price, rating} = product[0];

  return (
    <div className='product-details-area'>
      <div className='product-details-wrapper'>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className='product-info'>
          <h2 className='title'>{title}</h2>
          <span className='price'>{price}$</span>
          <p>Rating: {rating.rate}({rating.count})</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;