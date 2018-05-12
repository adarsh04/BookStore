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
      .then(data => this.setState({ genres: data.map(genre => genre.name)}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/genres');
    const body = await response.json();
    console.log(body.data);
    /*if (response.status !== 200) throw Error(body.message);*/
    return body.data;
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