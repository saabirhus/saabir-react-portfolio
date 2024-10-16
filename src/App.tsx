import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import ProfileAndSkills from './components/ProfileAndSkills';
import Footer from './components/Footer';
import ContactMe from './components/Contact';
import "./index.css"

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <Header />
      <section id='profile-and-skills'>
        <ProfileAndSkills />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='contact'>
        <ContactMe /> 
      </section>
      <Footer />
    </div>
  );
}

export default App;
