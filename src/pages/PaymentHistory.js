import React, {Component} from 'react'
import axios from 'axios'

class PaymentHistory extends Component{
	constructor(props){
		super(props)
		this.state={
			lists:null,
			textList:null
		}
	}
	async UNSAFE_componentWillMount(){
		try{
			//const res = await axios.post('http://localhost:4000/getcharge/'+charge_id);
			const res = await axios({
				headers:{
					"Content-Type":"application/json"
				},
				url:'https://omiseapi.herokuapp.com/gethistory/',
				//url:'http://localhost:4000/gethistory/',
				method:'GET',
				data:{
					from:"2019-12-01T00:00:00Z",
					to:"2020-10-25T00:00:00Z",
					offset:0,
					limit:10
				}
			});
			this.setState({lists: res.data})
			//console.log(this.state.lists.data[0].id)
			if(this.state.lists!==null){
				const txt = this.state.lists.data.map((item,index)=>{
					var date = new Date(item.created_at)
					var d = date.getDate()
					var m = date.getMonth()
					var y = date.getFullYear()
					var h = date.getHours()
					var mi = date.getMinutes()
					var s = date.getSeconds()
					return <li key={index}>#{index+1}. ID: {item.id}, Amount: {(item.amount/100).toFixed(2)}, Currency: {item.currency}, 
					Status: <span className={item.status==="successful"?'green':'orange'}>{item.status}</span>,
					Created: {y}-{m+1}-{d} {h}:{mi}:{s}</li>
				})
				this.setState({textList:txt})
			}
		}catch(error){
			console.log(error)
		}
	}
	render(){
	
		return (
			<div>
				<h2>การชำระเงินล่าสุด 50 รายการ</h2>
				<div>
					{
						!this.state.textList &&
						<h4>Loading...</h4>
					}
					<ul className="list-unstyled">
						{this.state.textList}
					</ul>
				</div>
			</div>
		)
	}
}

export default PaymentHistory;