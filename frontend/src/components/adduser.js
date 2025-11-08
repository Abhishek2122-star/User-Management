import React, { useState } from 'react';
import { addUser } from '../services/userService';

export default function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, email }).then(() => {
      alert("User added!");
      setName(''); setEmail('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}
