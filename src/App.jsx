import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { About, Contact, Experience, Navbar, Tech, Works, StarsCanvas, ScrollButton } from './components';
import { Footer } from './components';
import { Profile } from './components';
import {Blog} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Profile />
        </div>
        <ScrollButton />
        <About />
        <Blog />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer />        
        </div>
      </div>    
    </BrowserRouter>
  );
};

export default App;

