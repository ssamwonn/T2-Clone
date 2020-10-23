import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import ProductList from "./Pages/ProductList/ProductList";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Search from "./Pages/Search/Search";
import MyPage from "./Pages/MyPage/MyPage";
import Cart from "./Pages/Cart/Cart";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/account" component={Login} />
          <Route exact path="/account/join" component={Join} />
          <Route exact path="/shop" component={ProductList} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/show-search?q=:key" component={Search} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
