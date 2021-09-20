import React from 'react';
import loader3CSS from './loader3.module.css';

const Loader3 = () => {
  return (
    <div className={loader3CSS.ring}>
      Loading <span></span>
    </div>
  );
};

export default Loader3;
