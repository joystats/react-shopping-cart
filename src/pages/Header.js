import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

class Header extends Component{
	render(){
		return (
			<>
				<header>
					<h1>Serverless MySQL Application</h1>
					<h2>Robot Profiles</h2>
					<p>This website is a collection of robot profiles, loaded from a Node.js API that pulls data from MySQL and returns it as JSON, ready for pagination.</p>
				</header>
				<ul id="nav">
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/products">Products</NavLink></li>
					<li><NavLink to="/cart">Cart</NavLink></li>
					<li><NavLink to="/history">Payment History</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
				<div className="clear"></div>
			</>
		)
	}
}

export default Header;