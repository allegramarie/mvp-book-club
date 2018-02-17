import React from 'react'

const Related = (props) => {

 	return !!Object.keys(props.book).length ? 
 	(
	<div className="col-8">
	<h4> Related </h4>
	Books similar to {props.book.title}.
	<ul>
    {props.related.map((book, i) =>
      <li key={i}>
      	<a href={book.link}>{book.title}</a> 
      </li>
    )}
  </ul>
	
	</div>
	) : (
		<div> </div> 
	)
}

export default Related;