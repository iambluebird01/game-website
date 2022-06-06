import React, { useEffect } from 'react';
import Blogs from '../components/Blogs';
import GameInfo from '../components/GameInfo';
import Footer from '../components/Footer';
import Home from '../components/Home';
import ScrollToTop from 'components/ScrollToTop';
import Designs from '../components/Designs';
import scrollreveal from 'scrollreveal';

export default function Homee() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #gameInfo1,
        #gameInfo2,
        #gameInfo3,
        #blogs,
        footer
    `,
        {
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById('home');
    home.style.transform = 'none';
  }, 1500);
  return (
    <div>
      <ScrollToTop />
      <Home />
      <Designs />
      <GameInfo />
      <Blogs />
      <Footer />
    </div>
  );
}
