import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About');

  const renderPage = () => {
    switch(currentSection) {
      default:
        return <About />;
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
    }
  };

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>
          {renderPage(currentSection)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
