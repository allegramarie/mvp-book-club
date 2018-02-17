import React from 'react'

const Cover = (props) => {
	console.log('these are the props', props.book, 
		'\n and this si the props.book.book.imag_url', props.book.image_url,
		'and this is props.book.length', Object.keys(props.book).length)
 return !!Object.keys(props.book).length ? 
 (
	<div className="col-6">
		<h4> {props.book.title} </h4>
		{console.log("Cover props!", props.book.image_url)}
		<img src={props.book.image_url} alt=""/>
	</div>
	) : (
		<div> Search for a book to get more information: </div> 
	)
}

export default Cover;