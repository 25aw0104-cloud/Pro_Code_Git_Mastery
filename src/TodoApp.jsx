import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h2>ToDoリスト</h2>
      <p>{todos.length}件のタスク</p>

      <TodoInput task={task} setTask={setTask} addTask={addTask} />
      <TodoList todos={todos} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;

//feat: delete task feature
//feat: task count feature