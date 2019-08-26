import React from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Header from './Header';
import Jumbotron from './Jumbotron';
import './App.css';
import Picture from './Picture';
import Paragraph from './Paragraph';
import Carousel from './Carousel';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header></Header>
      <Jumbotron></Jumbotron>
      <Picture></Picture>
      <Paragraph></Paragraph>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
