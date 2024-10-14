import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Profile from './components/Profile';
import "./App.css"

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
