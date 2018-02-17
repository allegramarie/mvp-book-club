import React from 'react'

const Reviews = (props) => {
 	return !!Object.keys(props.book).length ? 
 	(
	<div className="col-6">
	<h4> Reviews for {props.book.title} </h4>
<div>
	</div>
	</div>
	) : (
		<div> </div> 
	)
	
}

export default Reviews;