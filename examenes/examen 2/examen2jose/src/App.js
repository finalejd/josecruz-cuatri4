import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { AccordionAPI } from './components/showapis';

function App() {
  return (

    <div>
      <Header/>   
      <AccordionAPI/>
      <Footer/>
    </div>
  );

}

export default App;
