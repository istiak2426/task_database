import React from 'react'

import { Card } from 'reactstrap';

const List = ({product}) => {


	
	let result = null;

	if(product.term === true){
			result = (<><p> Agree-  Yes</p></>)
		}
		else{
			result = (<><p>Agree- No</p></>)
		}



  return (
	<div className="col-6">
		
		<Card>
        <p>Name - {product.name}  </p>
		<p>Selector -{product.category.name} </p>
		{result}
		</Card>

		<br/>
   
	</div>
  )
}

export default List