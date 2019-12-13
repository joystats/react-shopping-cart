import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Finished from './pages/Finished'
import PaymentHistory from './pages/PaymentHistory'
import './App.css';

class App extends Component {
	render(){

		return (
			<div id="container">
				<Header/>
				<div id="page">
					<Switch>
						<Route path="/finished/:id" component={Finished}/>
						<Route path="/history" component={PaymentHistory}/>
						<Route path="/checkout">
							<Checkout/>
						</Route>
						<Route path="/product/:id/:title" component={ProductDetail}/>
						<Route path="/products" exact>
							<Products/>
						</Route>
						<Route path="/cart">
							<Cart/>
						</Route>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/" exact>
							<Home/>
						</Route>
					</Switch>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;

