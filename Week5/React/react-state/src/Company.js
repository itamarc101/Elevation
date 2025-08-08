import React from 'react';

const Company = ({ name, revenue }) => {
  return (
    <div>
      <p>{name} makes {revenue} billion dollars per year</p>
    </div>
  );
};

export default Company;
