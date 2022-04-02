import Blogs from 'components/Blogs';
import Footer from 'components/Footer';
import GameInfo from 'components/GameInfo';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import React from 'react';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <GameInfo />
      <Blogs />
      <Footer />
    </div>
  );
}
