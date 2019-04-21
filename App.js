import React, { Component } from 'react';
import UsersList from "./components/UsersList/UsersList";
import UserDetails from './components/Details/UserDetails';

class App extends Component {


  render() {

    return (
      <div >
        <h1>Lista useri</h1>
        <UsersList />
        <hr/>
        <UserDetails />

      </div>
    );
  }
}



export default App;
