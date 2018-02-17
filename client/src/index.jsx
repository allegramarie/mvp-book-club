import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Search from './components/Search.jsx';
import Cover from './components/Cover.jsx';
import Related from './components/Related.jsx';
import Reviews from './components/Reviews.jsx';
import History from './components/History.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
      book: {},
      author: {},
      similar_books: [{}]
    }
	}

	search(term){
		console.log(`${term} was searched!`)
		axios.post('/books', {
			title: term
		})
		.then((res) => {
			console.log("This is data", res.data)
			this.setState({
				book: res.data.book,
				author: res.data.author,
				similar_books: res.data.similar_books
			})	
		})

	}

	render(){
		return !this.state.book 
		? (<div> loading... </div>) 
		: (<div>
				<h1>Book Club</h1>
				<Search onSearch={this.search.bind(this)}/>
				<div className = "row">
				{console.log("State?", this.state.book)}
					<Cover book={this.state.book}/>
				</div>

				<div className = "row">
					<Related book={this.state.book} related={this.state.similar_books}/>
				</div>
		</div>)
	}
}

	ReactDOM.render(<App/>, document.getElementById('app'));