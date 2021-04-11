import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="app">
      <Header/>
      {/* Home */}
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
