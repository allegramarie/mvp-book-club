import React from 'react'

const Reviews = (props) => (
	<div>
	<h4> Reviews Component </h4>
	<div>
	There are {props.book} repos.
	{console.log("Props!", props.book)}
	</div>
	</div>
)

export default Reviews;