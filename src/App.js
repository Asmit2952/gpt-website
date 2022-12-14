import React from 'react';

import { Blog, Features, Footer, GPT, Header, Possibility} from './containers';
import { Brand, CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <div className="gradient_bg"> 
          <Header />
        </div>
        <Brand />
        <GPT />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App