import React, {Component} from 'react';
// import logo from './logo.svg';
//import './App.css';
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class HelloWorld extends Component {
    render() {
        const { text } = this.props;
        return (
            <div>
            hello world, {text}
            </div>
        );
    }
}

export default HelloWorld;
