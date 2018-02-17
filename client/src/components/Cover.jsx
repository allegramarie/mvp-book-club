import React from 'react'

const Cover = (props) => (
	<div>
	<h4> Cover Component </h4>
	<div>
	There are {props.book} repos.
	{console.log("Props!", props.book)}
	</div>
	</div>
	)

export default Cover;