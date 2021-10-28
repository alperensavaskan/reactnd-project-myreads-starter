import React from 'react';
import './App.css'
import {
    Link
} from "react-router-dom";
import Book from "./Book";
import {search} from "./BooksAPI";


class Search extends React.Component {
    state = {
        searchInput: "",
        searchResults: []
    }

    handleMissingThumbnail = (books) => (
        books.map(book => {
            const keys = Object.keys(book);
            if (!keys.includes("imageLinks")) {
                book.imageLinks = {thumbnail: ""};
            }
            return book
        })
    );

    shelfCheck = (books) => (
        books.map(book => {
            if (this.props.booksOnShelf.find(b => b.id === book.id)) {
                const shelf = this.props.booksOnShelf.find(b => b.id === book.id).shelf
                book.shelf = shelf
            } else {
                book.shelf = "none"
            }
            return book
        })
    );

    handleChange = (event) => {

        if (event.target.value !== "") {
            search(event.target.value).then(results => (results.error) ? this.setState({searchResults: []}) : this.setState({searchResults: this.handleMissingThumbnail(this.shelfCheck(results))}))
        } else {
            this.setState({searchResults: []})
        }

    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close
                        </button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults.map((book) => (
                            <li>
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

export default Search;