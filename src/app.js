import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import BookShelf from './BookShelf';

class BookStore extends React.Component {

  getCurrentTime = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; 
  }

  render() {
    const headerText = "Book Store";
    let footerText = `${this.getCurrentTime()} Author: Adarsh Jegadeesan`;
    const genre = "Mystery";
    return (
      <div>
        <Header headerText={headerText} />
        <BookShelf genre={genre} />
        <Footer footerText={footerText} />
      </div>
    ) 
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<BookStore />, appRoot)