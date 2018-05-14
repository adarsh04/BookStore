import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BookShelf from '../BookShelf';
import { Container, BookShelfContainer, mainTheme } from './styles';
import { ThemeProvider } from 'styled-components';

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
    let footerDate = this.getCurrentTime();
    return (
      <ThemeProvider theme={mainTheme}>
        <Container>
          <Header headerText={headerText} />
          <BookShelfContainer>
            {this.state.genres.map((genre) => (
              <BookShelf key={genre} genre={genre} />
            ))}
          </BookShelfContainer>  
          <Footer footerDate={footerDate} />
        </Container>
      </ThemeProvider>    
    ) 
  }
}

export default BookStore;