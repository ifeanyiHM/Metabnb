
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import HeaderSection from './Component/HeaderSection';
import Main from './Component/Main';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlaceToStay from './Component/PlaceToStay';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/Metabnb">
            <HeaderSection />
            <Main />
          </Route>
          <Route path="/Place">
            <PlaceToStay />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
