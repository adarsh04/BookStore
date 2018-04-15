class BookStore extends React.Component {

  getCurrentTime() {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; 
  }

  render() {
    const headerText = "Book Store";
    let footerText = this.getCurrentTime();

    return (
      <div>
        <Header headerText={headerText} />
        <p> This is the book store </p>
        <Footer footerText={footerText} />
      </div>
    ) 
  }
  
}

//some text to indicate that this is the header of the book store
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.headerText} </h1>
      </div>  
    )
  }
}

//text to show the datetime at the bottom of the page
class Footer extends React.Component {  
  render() {
    return (
      <div>
        <h4> {this.props.footerText} </h4>
      </div>  
    )
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<BookStore />, appRoot)