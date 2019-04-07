import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import HowItWorks from './HowItWorks';
import Features from './Features';
import NewsLetter from './NewsLetter';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <HowItWorks />
        <Features />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default App;
