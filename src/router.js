import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookStore from './components/BookStore';
import CreateBook from './components/CreateBook';
import CreateGenre from './components/CreateGenre';

export const Router = (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={BookStore}/>
        <Route path="/createBook" component={CreateBook}/>
        <Route path="/createGenre" component={CreateGenre}/>
      </Switch> 
    </div>
  </BrowserRouter>
)