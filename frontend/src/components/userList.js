import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then(() => setUsers(users.filter(u => u.id !== id)));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => handleDelete(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
