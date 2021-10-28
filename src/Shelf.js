import React from 'react';
import Book from "./Book.js";

class Shelf extends React.Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.sectionTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <Book id={book.id} coverWidth={128} coverHeight={188}
                                      backgroundImage={book.imageLinks.thumbnail} title={book.title}
                                      authors={book.authors} shelf={book.shelf} shelfChange={this.props.shelfChange}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;