import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Products extends Component{
	constructor(props){
		super(props)
		this.state={
			products: null
		}
	}
	async componentDidMount(){
		await fetch("https://omiseapi.herokuapp.com/getproducts")
		.then(result=>result.json())
		.then(res=>{
			this.setState({products: res});
		})
	}
	randomIntFromInterval(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	render(){
		return (
			<>
				<h2>รายการสินค้า</h2>
				<ul className="list-items">
					{
						!this.state.products && 
						<h2 className="loading">Loading...</h2>
					}
					{
						this.state.products &&
						this.state.products.map((item, index)=>{
							return (
								<li key={index}>
									<Link to={`/product/${item.id}/${item.name}`}>
										<img src={item.image_url} alt="item"/>
									</Link>
									<span>{item.name}</span>
									<p>{item.price} THB</p>
								</li>
							)
						})
					}
				</ul>
			</>
		)
	}
}
export default Products