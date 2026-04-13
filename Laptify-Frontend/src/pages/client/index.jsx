import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const RootPage = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootPage
