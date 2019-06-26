import React from 'react';
import './TodoListItem.css';
// import propTypes from 'prop-types';

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? '#1265d0' : '#222',
    fontWeight: important ? '700' : '600',
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>
      <div className="buttons-group">
        <button
          type="submit"
          className="btn btn-outline btn-outline-success btn-sm"
        >
          <i className="fa fa-exclamation" />
        </button>
        <button
          type="submit"
          className="btn btn-outline btn-outline-danger btn-sm"
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    </span>
  );
};

// TodoListItem.propTypes = {
//   label: propTypes.string.isRequired,
//   important: propTypes.bool.isRequired,
// };

export default TodoListItem;
