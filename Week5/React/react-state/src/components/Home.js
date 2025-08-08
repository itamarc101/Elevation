import React from 'react';
import Item from './Item';

const Home = ({ store }) => {
  return (
    <div>
      <h2>Store Items</h2>
      {store.map((product, index) => (
        <Item key={index} item={product.item} price={product.price} />
      ))}
    </div>
  );
};

export default Home;
