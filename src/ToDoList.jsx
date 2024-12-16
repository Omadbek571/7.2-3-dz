import React from 'react'

function ToDoList({user}) {
    return (
        <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold">{user.name}</h3>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
        </div>
      );
}

export default ToDoList