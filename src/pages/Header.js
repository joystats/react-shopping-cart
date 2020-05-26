import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom';

class Header extends Component{
	componentDidMount(){
		this.getAmount()
	}
	render(){
		return (
			<>
				<header>
					<h1>ตัวอย่างระบบการชำระเงิน</h1>
					<h2>ผ่านบัตรเครดิตและอินเตอร์เน็ตแบ็งคกิ้ง.</h2>
					<p>โดยใช้ Payment API ของ <a href="https://omise.co">Omise.co</a> ท่านสามารถทดลองใช้งานได้ทันที หรือ ข้อมูลเพิ่มเติมที่หน้า <NavLink to="/about">About</NavLink></p>
				</header>
				<ul id="nav">
					<li><NavLink exact to="/">Home</NavLink></li>
					<li><NavLink to="/products">Products</NavLink></li>
					<li className="cart_link"><NavLink to="/cart">Cart<span>{this.props.amount}</span></NavLink></li>
					<li><NavLink to="/history">Payment History</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
				<div className="clear"></div>
			</>
		)
	}
	
	getAmount=()=>{
		
		let localData = localStorage.getItem("carts");
		let array_price=[]
		if(!localData){
			return;
		}
		JSON.parse(atob(localData)).map((item)=>{
			array_price.push(parseInt(item.amount))
			return item;
		})
		let total = array_price.reduce((total,num)=>{
			return total+num;
		},0)
		this.props.setclearAmountCart(total)
	}
}


function mapStateToProps(state){
	return {
		amount: state.create.amount
	}
}
function mapDispatchToProps(dispatch){
	return {
		setclearAmountCart:(amount)=>{
			dispatch({type: "SET",payload:amount})
		},
		clearAmountCart:()=>{
			dispatch({type: "CLEAR"})
		},
		addAmountCart:()=>{
			dispatch({type: "ADD"})
		},
		delAmountCart:()=>{
			dispatch({type: "DEL"})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)