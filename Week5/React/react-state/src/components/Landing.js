import React from 'react';

const Landing = ({ user, store }) => {
  const hottestItem = store.find(i => i.hottest);

  return (
    <div>
      Welcome, {user} 
      {hottestItem && (
        ` The hottest item is ${hottestItem.item} for ${hottestItem.price}`
      )}
    </div>
  );
};

export default Landing;
