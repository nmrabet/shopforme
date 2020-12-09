import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import OrderDetail from "./components/OrderDetail";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/home/orderdetails'>
          <OrderDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
