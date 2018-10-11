import React from 'react'

class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		}
		this.onChange = this.onChange.bind(this);
		this.search = this.search.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({
			term: e.target.value
		});
	}

	search(e) {
		e.preventDefault();
		this.props.onSearch(this.state.term)
	}

	render(){
		return(<div>
			<h4> Search </h4>
			Enter a title or author: <input value={this.state.term} onChange={(e) => {this.onChange(e)}}/>
			<button onClick={this.search}>Search</button>
		</div>)
	}
}

export default Search;