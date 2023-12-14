import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from '../style';

const Button = ({ styles, linkTo }) => {
  return (
     <Link to="/form" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px]
    text-primary outline-none ${styles} rounded-[10px]`}>
      Get Started
    </Link>
  );
};

export default Button;