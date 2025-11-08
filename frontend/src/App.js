import React from 'react';
import './App.css';
import UserList from './components/userList';
import AddUser from './components/adduser';

function App() {
  return (
    <div className="App">
      <h1>User Management</h1>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
