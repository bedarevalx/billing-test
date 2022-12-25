import React from 'react';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div className='container'>
      <Header />
      <div className='bg-secondary bg-opacity-25'>{children}</div>
    </div>
  );
};

export default MainLayout;
