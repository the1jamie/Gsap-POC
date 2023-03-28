import React from 'react';
import './App.css';
import LazyGallery from './LazyGallery/LazyGallery';
import Square from './Square/Square';
import TextGlide from './TextGlide/TextGlide';

const App = () => {

  

  return (
    <div className="App">
      <Square />
      <TextGlide />
      <LazyGallery />
    </div>
  );
}

export default App;
