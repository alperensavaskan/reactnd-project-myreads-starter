import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyApp from "./MyApp";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter><MyApp/></BrowserRouter>, document.getElementById('root'))
