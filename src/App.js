import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        
        <Header />

        <Switch>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
        </Switch>

        <Route path="/" exact>
            <Home />
        </Route>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
