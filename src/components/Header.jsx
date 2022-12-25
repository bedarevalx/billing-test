import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='d-flex flex-row justify-content-between align-items-center border p-3 shadow'>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Страны мира</h1>
      </Link>
      <a href='https://restcountries.com/'>https://restcountries.com/</a>
    </header>
  );
};

export default Header;
