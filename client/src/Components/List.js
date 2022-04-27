import React from 'react'

const List = ({product}) => {


	
	let result = null;

	if(product.term === true){
			result = (<><li> Agree-  Yes</li></>)
		}
		else{
			result = (<><li>Agree- No</li></>)
		}



  return (
	<div className="col-6">
		<ul>
        <li>Name - {product.name}  </li>
		<li>Selector -{product.category.name} </li>
		{result}
    	</ul>
	</div>
  )
}

export default List