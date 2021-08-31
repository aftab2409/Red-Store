import './App.css';
import Header from './Componet/Header/Navbar'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Componet/Footer/Fotter';
import Home from './Componet/Home/Home';
import Singleproduct from './Container/Singleproduct/Singleproduct';
import singleItem from './Container/Single-item/single-item';



function App() {
  return (
    <>
    <Router>
      <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Singleproducts" component={Singleproduct} exact />
          <Route path="/singleItem" component={singleItem} exact />
        </Switch>
      <Footer />
      </Router>
    </>
  );
}


export default App;
