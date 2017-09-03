import React, {Component} from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class BookShelf extends Component {
	static propTypes = {
		booksOnShelf: PropTypes.array.isRequired,
		onShiftBook: PropTypes.func.isRequired
	} 

	render() {
		const { title, booksOnShelf } = this.props

		const shelves = ['currentlyReading', 'wantToRead', 'read']
		const categories = ['Currently Reading', 'Want to Read', 'Read']

		return (
			<div>{shelves.map((shelf, index) => {
				return (
					<div key={index} className="list-books-content">
		        <div className="bookshelf">
		          <h2 className="bookshelf-title">{categories[index]}</h2>
	          	<div className="bookshelf-books">
	            	<ol className="books-grid">
	            		{this.props.booksOnShelf.sort(sortBy('title'))
	                    .filter(book => book.shelf === shelf)
	                    .map(book => (
                      		<Book 
                        		onShiftBook={this.props.onShiftBook}
                        		key={book.id}
				 				book={book}
				  			/>
          				))
          				}            		
          			</ol>
          		</div>
        		</div>
      		</div>
      	)}
			)}
		</div>
		)
	}
}

export default BookShelf