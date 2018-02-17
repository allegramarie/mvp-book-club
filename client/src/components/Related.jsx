import React from 'react'

const Related = (props) => (
	<div>
	<h4> Related Component </h4>
	<div>
	There are {props.book} repos.
	{console.log("Props!", props.book)}
	</div>
	</div>
	)

export default Related;