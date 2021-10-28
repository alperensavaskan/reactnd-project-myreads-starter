import React from 'react';
import './App.css'

class Book extends React.Component {

    shelfChange = (event) => {
        this.props.shelfChange({ id: this.props.id }, event.target.value)
    };

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: this.props.coverWidth,
                        height: this.props.coverHeight,
                        backgroundImage: 'url("' + this.props.backgroundImage + '")'
                    }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.shelfChange} value={this.props.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book;