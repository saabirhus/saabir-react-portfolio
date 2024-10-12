import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Projects />
    </div>
  );
}

export default App;
