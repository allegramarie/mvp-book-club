var mongoose = require('mongoose')
if(process.env.PORT){
	mongoose.connect('mongodb://user:forest@ds239368.mlab.com:39368/book-club0799');
} else {
	mongoose.connect('mongodb://localhost/bookclub');
}
var db = mongoose.connection;
var Schema = mongoose.Schema;

//from the database
var booksSchema = new Schema({
	id: {
		type: Number, 
	},
	author: {
		name: String
	},
	book: {
		title: String,
		isbn: {
			type: String, 
			unique: true
		}
	},
	liked: Boolean
})

var Books = mongoose.model('Books', booksSchema);

let fetch = (books) => {
//should pull the title of previous searches from the database
	return Books.find({}).sort('id').limit(5).exec();
}

let add = (books) => {
//should add searches to the database
console.log("Books to add", books)
	return Books.create(books, function(err, record){
		if(err){
			console.log("error at", err)
		} else {
			console.log("record created!")
		}
	})
}

module.exports.fetch = fetch;
module.exports.add = add;