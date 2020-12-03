import React, {useEffect} from 'react';

const Product = () => {
  useEffect(() => {
    document.title = 'DTI Task - Products';
  });
  return <div> Products Page</div>;
};

export default Product;
