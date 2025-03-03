import Navbar from './Components/Navbar/navbar';
import Intro from './Components/Intro/intro';
import About from './Components/Skills/skills'
import Portfolio from './Components/portfolio/works';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Footer/>
      
    </div>
  );
}

export default App;
