const TodoList = ({ todos, deleteTask }) => {
  if (todos.length === 0) {
    return <p>まだタスクがありません</p>;
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => deleteTask(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;