import React from 'react';

import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel/SearchPanel';
import AppHeader from '../AppHeader/AppHeader';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';

import './App.css';

const App = () => {
  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Make break', important: true },
    { id: 3, label: 'Create app', important: false },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList items={todoData} />
    </div>
  );
};

export default App;
