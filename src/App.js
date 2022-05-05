
import './App.css';
import { About } from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';
import { Header } from './components/pages/Header';
import { Projects } from './components/pages/Projects';
import { Services } from './components/pages/Services';
import { Skills } from './components/pages/Skills';
import Testimony from './components/pages/Testimony';
function App() {


  return (
    <>
   <Header/>
   <About/>
   <Skills/>
   <Services/>
   <Projects/>
   <Testimony/>
   <Contact/>
   <Footer/>
    </>
  );
}

export default App;
