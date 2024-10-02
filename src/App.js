import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.jsx';
import Introduction from './Introduction.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';

function App() {
  return (
    <div className="text-white">
        <NavBar />
        <Introduction />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
