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
      book: []
    }
	}

	ComponentDidMount(){
		// search('Lahiri');
	}

	search(term){
		console.log(`${term} was searched!`)
		axios.post('/', {
			title: term
		})
		.then(() => {
			axios.get('/')
				.then((res) => {
					console.log("in axios get", res, res.data)
					this.setState({
						book: res.data
					})
				})
		})
	}

	render(){
		return (<div>
			<h1>Book Club</h1>
			<Search onSearch={this.search.bind(this)}/>
			<Cover book={this.state.book}/>
			<Reviews book={this.state.book}/>
			<Related book={this.state.book}/>
			<History/>
		</div>)
	}
}

	ReactDOM.render(<App/>, document.getElementById('app'));