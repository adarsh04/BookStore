import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BookShelf from './BookShelf';
import { Container } from './styles';

class BookStore extends React.Component {

  getCurrentTime = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; 
  }

  render() {
    const headerText = "Book Store";
    let footerText = `${this.getCurrentTime()} Author: Adarsh Jegadeesan`;
    const genres = ["Mystery","Fiction","Romance","Science Fiction"];
    return (
      <Container>
        <Header headerText={headerText} />
        {genres.map((genre) => (
          <BookShelf genre={genre} />
        ))}
        <Footer footerText={footerText} />
      </Container>
    ) 
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<BookStore />, appRoot)