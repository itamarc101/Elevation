import React from 'react';

const Item = ({ item, price }) => {
  return (
    <div>
      <p>{item} - ${price}</p>
    </div>
  );
};

export default Item;
