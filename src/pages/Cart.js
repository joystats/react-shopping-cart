import React, {Component} from 'react'
import Script from 'react-load-script'
import {Link} from 'react-router-dom'
import axios from 'axios'

let OmiseCard;
let totalPrice=0
class Cart extends Component{
	constructor(props){
		super(props)
		this.state={
			carts:null,
			charged:null,
			loading:false
		}
	}
	componentDidMount(){
		let carts = localStorage.getItem("carts");
		if(carts!==null){
			this.setState({carts:atob(carts)})
		}
	}
	handleLoadScript=()=>{
		OmiseCard=window.OmiseCard
		OmiseCard.configure({
			publicKey: 'pkey_test_5i36vsmd4088wc05dea',
			currency: 'thb',
			frameLabel: 'Joystats Shop',
			defaultPaymentMethod: "credit_card",
			otherPaymentMethods:["internet_banking"],
			submitLabel: 'PAY RIGHT NOW!',
			buttonLabel: 'Pay with omise'
		});

		//OmiseCard.configureButton('#checkout-button');
		//OmiseCard.attach();
	}
	render(){
		var listItem=null
		let array_price=[]
		if(this.state.carts!==null){
			listItem = JSON.parse(this.state.carts).map((item)=>{
				array_price.push(item.price*item.amount)
				return <li key={item.id}>{item.title} - Price: {item.price} x <input type="number" value={item.amount} onChange={(e)=>this.changeQty(item.id,e)}/> = {item.totalPrice} <button className="btn-delete" onClick={()=>this.removeItem(item.id)}>remove</button></li>
			})

			totalPrice = array_price.reduce((total,num)=>{
				return total+num;
			},0)
		}
		
		const {carts,charged,loading} = this.state
		
		return (
			<div>
				<Script url="https://cdn.omise.co/omise.js" onLoad={this.handleLoadScript}/>
				<h2>ชำระเงินผ่านบัตรเครดิต หรือ Internet Banking</h2>
				{
					!charged &&
					<ul className="carts-list">
						{
							(carts)?listItem:<div>- Empty cart -</div>
						}
					</ul>
				}
				
				{
						carts && 
						<form>
							<button disabled={loading} type="submit" value="pay credit card" onClick={this.handleCheckout}>Pay Amount: {totalPrice.toFixed(2)} THB</button>
						</form>
				}
				
				{
						loading && 
						<h4>Processing...</h4>
				}
				{
					charged &&
						<div id="pay-complete">
							<h4>Thank you for your payment with credit card</h4>
							<div>
								Amount: {(charged.amount/100).toFixed(2)}
								<br/>
								Status: {charged.status}
								<br/><br/> Go to <Link to="products">Products</Link>
							</div>
						</div>
				}
			</div>
		)
	}
	
	createInternetBankingCharge = async (name,email,amount,token,return_uri,order_id)=>{
		const response = await axios({
			method: 'post',
			url: 'https://omiseapi.herokuapp.com/checkout-internet-banking',
			//url: 'http://localhost:4000/checkout-internet-banking',
			data: {
				name,
				email,
				amount,
				token,
				return_uri,
				order_id
			},
			headers: {
				"Content-Type": "application/json"
			}
		});
		if(response){
			console.log('response-->',response.data)
			const {authorizeUri,id,random_id} = response.data
			sessionStorage.setItem("ref_"+random_id,id);
			localStorage.removeItem("carts")
			this.setState({carts:null})
			window.location.href=authorizeUri
		}
	}
	
	createCreditCardCharge = async (name,email,amount,token)=>{
		const response = await axios({
			method: 'post',
			url: 'https://omiseapi.herokuapp.com/checkout-credit-card',
			//url: 'http://localhost:4000/checkout-credit-card',
			data: {
				name,
				email,
				amount,
				token
			},
			headers: {
				"Content-Type": "application/json"
			}
		});
		if(response){
			this.setState({loading:false})
			if(response.data.status==="successful"){
				localStorage.removeItem("carts")
				this.setState({carts:null})
			}
			this.setState({charged:response.data})
		}
	}

	omiseCardHandle=()=>{
		const random = Math.floor(Math.random() * 1000) + 1
		this.setState({loading:true})
		const totalAmount = totalPrice*100
		OmiseCard.open({
			amount: totalAmount,
			onCreateTokenSuccess: (token) => {
				//console.log(token)
				if(token.indexOf('tokn')===-1){
					this.createInternetBankingCharge('Kline', 'test@test.com', totalAmount, token,'https://joystats.co/#/finished/'+random,random);
					//this.createInternetBankingCharge('Kline', 'test@test.com', totalAmount, token,'https://reactshop-18352.firebaseapp.com/#/finished/'+random,random);
				}else{
					this.createCreditCardCharge('Kline', 'test@test.com', totalAmount, token);
				}
			},
			onFormClosed: () => {
				this.setState({loading:false})
			},
		})
	}
	handleCheckout=e=>{
		e.preventDefault();
		this.omiseCardHandle()
	}

	changeQty(id,e){
		if(e.target.value<=0){
			return;
		}
		var updateCarts = JSON.parse(this.state.carts).map((item)=>{
			if(item.id===id){
				return {id: item.id, title: item.title, price: item.price, amount:e.target.value, totalPrice: item.price*e.target.value}
			}else{
				return item
			}
		})
		this.setState({carts:JSON.stringify(updateCarts)})
		localStorage.setItem("carts",btoa(JSON.stringify(updateCarts)))
	}
	
	removeItem(id){
		var updateCarts = JSON.parse(this.state.carts).filter((item)=>{
			return item.id!==id
		})
		if(updateCarts.length>0){
			this.setState({carts:JSON.stringify(updateCarts)})
			localStorage.setItem("carts",btoa(JSON.stringify(updateCarts)))
		}else{
			this.setState({carts:null})
			localStorage.removeItem("carts")
		}
		
		
	}
}


export default Cart;