import React from 'react'

const History = (props) => (
	<div>
	<h4> History Component </h4>
	<div>
	There are {props.book} repos.
	{console.log("Props!", props.book)}
	</div>
	</div>
)

export default History;