import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

class Header extends Component{
	render(){
		return (
			<>
				<header>
					<h1>เว็บไซต์ตัวอย่างระบบการชำระเงิน</h1>
					<h2>ผ่านบัตรเครดิตและอินเตอร์เน็ตแบ็งคกิ้ง</h2>
					<p>โดยใช้ Payment API ของ <a href="https://omise.co">Omise.co</a> ท่านสามารถทดลองใช้งานได้ทันที หรือ ข้อมูลเพิ่มเติมที่หน้า <NavLink to="/about">About</NavLink></p>
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