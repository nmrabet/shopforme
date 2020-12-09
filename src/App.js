import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import OrderDetail from "./components/OrderDetail";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/home/:orderId'>
            <OrderDetail />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
