import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BookShelf from './components/BookShelf';
import { Container } from './styles';

class BookStore extends React.Component {
  state = {
    genres: []
  };

  componentDidMount() {
    this.callApi()
      .then(res => console.log(res.data.name))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/genres');
    const body = await response.json();
    /*if (response.status !== 200) throw Error(body.message);*/
    console.log(body);
    return body;
  };

  getCurrentTime = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; 
  }

  render() {
    const headerText = "Book Store";
    let footerText = `${this.getCurrentTime()} Author: Adarsh Jegadeesan`;
    return (
      <Container>
        <Header headerText={headerText} />
        {console.log(this.state.genres)}
        {this.state.genres.map((genre) => (
          <BookShelf key={genre} genre={genre} />
        ))}
        <Footer footerText={footerText} />
      </Container>
    ) 
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<BookStore />, appRoot)