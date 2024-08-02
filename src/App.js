import logo from './logo.svg';
import './App.css';
import { NabBar } from './components/NabBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
  <div>
    <NabBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
  );
} 

export default App;
