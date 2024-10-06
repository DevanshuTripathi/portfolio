import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.jsx';
import Introduction from './Introduction.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
    <div className="text-white">
      <NavBar />
      <div className="px-0 md:px-12">
        <Introduction />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
