import React from 'react';
import button1CSS from './button1.module.css';

const Button1 = () => {
  return (
    <div className="items">
      <a href="#" className={button1CSS.btn1}>
        <span>button 1</span>
      </a>
    </div>
  );
};

export default Button1;
