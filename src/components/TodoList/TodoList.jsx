import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = ({ items }) => {
  const elements = items.map(item => (
    <li key={item.id} className="list-group-item">
      <TodoListItem label={item.label} important={item.important} />
    </li>
  ));
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;