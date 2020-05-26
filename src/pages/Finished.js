import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Finished extends Component{
	constructor(props){
		super(props)
		this.state={
			amount:0,
			status:null
		}
	}
	async UNSAFE_componentWillMount(){
		const {id} = this.props.match.params
		const charge_id = sessionStorage.getItem("ref_"+id)
		
		try{
			//const res = await axios.post('http://localhost:4000/getcharge/'+charge_id);
			const res = await axios.post('https://omiseapi.herokuapp.com/getcharge/'+charge_id);
			this.setState({amount: res.data.amount})
			this.setState({status: res.data.status})
		}catch(error){
			console.log(error)
		}
	}
	render(){
		
		return (
			<div>
				<h2>แจ้งการชำระเงิน</h2>
				{
					!this.state.status &&
					<h4>Processing...</h4>
				}
				{
					this.state.status &&	
					<div id="pay-complete">
						<h4>Thank you for your payment with Internet Banking</h4>
						<div>
							Amount: {(this.state.amount/100).toFixed(2)}
							<br/>
							Status: {this.state.status}
							<br/><br/> Go to <Link to="../products">Products</Link>
						</div>
					</div>
				}
				
				
			</div>
		)
	}
}

export default Finished;