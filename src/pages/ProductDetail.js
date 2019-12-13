import React, {Component} from 'react'


class ProductDetail extends Component{
	state={
		product: null,
		carts:null,
		exists:false
	}
	async componentDidMount(){
		const {id} = this.props.match.params
		await fetch("https://omiseapi.herokuapp.com/getproducts/"+id)
		.then(result=> result.json())
		.then(res=>{
			this.setState({product: res});
		})
		let carts = localStorage.getItem("carts");
		if(carts!==null){
			this.setState({carts:atob(carts)})
		}
		if(this.state.carts){
			const have = JSON.parse(this.state.carts).find((item)=>{
				return item.id===id
			})
			if(have){
				this.setState({exists:true})
			}else{
				this.setState({exists:false})
			}
			
		}
		
	}
	render(){
		const {id} = this.props.match.params
		return (
			<div>
				<h2>รายละเอียดสินค้า</h2>
				{
					!this.state.product && 
					<h2 className="loading">Loading...</h2>
				}
				{
					
					this.state.product &&
					
						<>
							<div className="product">
								<div className="item">
								{
									this.state.product.gallery.map((item, index)=>{
										return (
											<img src={item} key={index} alt={this.state.product.name}/>
										)
									})
								}
								</div>
								<div className="item">
									<ul className="list-unstyled">
										<li><h4 className="title">{this.state.product.name}</h4></li>
										<li><h4>{this.state.product.price.toFixed(2)} THB</h4></li>
										<li>{this.state.product.info} THB</li>
									</ul>
									<br/><button disabled={this.state.exists} onClick={()=>this.addToCart(id,this.state.product.name,this.state.product.price)}>ADD TO CART</button>
									
								</div>
							</div>
						</>
						
				}
				
			</div>
		)
	}

	addToCart(id,title,price){
		this.setState({exists:true})
		var carts=[]
		let cartStorage = localStorage.getItem("carts")
		if(cartStorage==null){
			carts.push({id: id, title: title, price: price, amount:1, totalPrice:price})
			localStorage.setItem("carts",btoa(JSON.stringify(carts)))
			//localStorage.setItem("carts",JSON.stringify(carts))
		}else{
			carts=JSON.parse(atob(cartStorage))
			var f = carts.findIndex((x)=>{
				return x.id===id
			})
			if(f===-1){
				carts.push({id: id, title: title, price: price, amount:1, totalPrice:price})
				localStorage.setItem("carts",btoa(JSON.stringify(carts)))
			}
		}
	}
}

export default ProductDetail