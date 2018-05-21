import React from 'react';
import ReactDOM from 'react-dom';
import { BookStore } from './components/BookStore';
import { Router } from './router'


const appRoot = document.getElementById('app');
ReactDOM.render(Router, appRoot)