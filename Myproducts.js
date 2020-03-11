import React , { Component } from 'react';

class Myproducts extends Component {
	constructor(props) {
		super(props)
		this.state={
			products:this.props.products
		}
	}
	render()
	{
		console.log(this.props.account)
		return (
			<div>
				{this.props.products.map((product,key) => {
					return (
						<div>
							{product.owner==this.props.account?
								<div>{product.name}</div>:null
							}
						</div>
					)
				})
			}
			</div>
		)
	}
}

export default Myproducts;