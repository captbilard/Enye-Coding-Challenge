import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Form from './components/Form'
import UsersTable from './components/Tables';

//Get all the various components from their various components folder and then render them here

const App = () => (
  <div className="Container">
    <h1> Coding Challenge 2</h1>
    <Form />
    <UsersTable />
  </div>
)



export default App;
