import React from 'react'
import './App.css'
import Shelf from "./Shelf";
import {getAll, update} from "./BooksAPI";
import {
    Route,
    Link
} from "react-router-dom";
import Search from "./Search";

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.getBooks = this.getBooks.bind(this);
        this.shelfChange = this.shelfChange.bind(this);
    }

    state = {
        books: [],
    }

    getBooks() {
        getAll().then(results => this.setState({books: results}))
    };

    shelfChange(book, newShelf) {
        update(book, newShelf).then(() => this.getBooks())
    };

    componentDidMount() {
        this.getBooks()
    };

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <div className="app">
                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <Shelf sectionTitle={"Currently Reading"}
                                           books={this.state.books.filter(book => book.shelf === "currentlyReading")}
                                           shelfChange={this.shelfChange}/>
                                    <Shelf sectionTitle={"Want To Read"}
                                           books={this.state.books.filter(book => book.shelf === "wantToRead")}
                                           shelfChange={this.shelfChange}/>
                                    <Shelf sectionTitle={"Read"}
                                           books={this.state.books.filter(book => book.shelf === "read")}
                                           shelfChange={this.shelfChange}/>
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to="/search">
                                    <button>Add a book</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                )}/>
                <Route path='/search' render={(props) => (
                    <Search {...props} shelfChange={this.shelfChange} booksOnShelf={this.state.books}/>
                )}/>
            </div>
        );
    }
}

export default MyApp
