import React, { useState } from 'react'
import Plus from '../assets/img/todo_plus.svg';
import Delete from '../assets/img/todo_delete.svg';
import Yet from '../assets/img/todo_checkbox.svg';
import Done from '../assets/img/todo_fillcheckbox.svg';


const Todolist = () => {
  const [content, setContent] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (content.trim() === '') {
      alert('내용을 입력해주세요');
      return;
    }

    setTodos([...todos, { text: content, completed: false }]);
    setContent('');
  }

  const listTodo = (index) => {
    const newTodos = todos.map((todo, idx) => {
      if (index === idx) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todolist_wrap">
      <div className="title">TO-DO LIST</div>
      <div className="add">
        <input value={content} onChange={(e) => setContent(e.target.value)} className="addvalue" type="text" placeholder='오늘 할 일을 입력해주세요!' />
        <button id="addbtn" onClick={addTodo}>
          <img src={Plus} alt="plus button" />
        </button>
      </div>
      <main>
        {todos.length === 0 ? (
          <p className="empty-message">오늘 할 일이 아직 없습니다. 할 일을 추가해주세요!</p>
        ) : (
          todos.map((todo, index) => (
            <div className="list" key={index}>
              <div className="box">
                <div name="checkbox" id={`checkbox${index}`}>
                  <img
                    src={todo.completed ? Done : Yet}
                    alt="checkbox"
                    onClick={() => listTodo(index)}
                  />
                </div>
                <label htmlFor={`checkbox${index}`}></label>
                <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                  {todo.text}
                </p>
              </div>
              <button id="deletebtn" onClick={() => deleteTodo(index)}>
                <img src={Delete} alt="delete button" />
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  )
}

export default Todolist
