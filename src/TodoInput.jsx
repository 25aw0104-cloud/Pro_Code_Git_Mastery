const TodoInput = ({ task, setTask, addTask }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="タスクを入力してEnterキー..."
      />
      <button onClick={addTask}>追加</button>
    </div>
  );
};

export default TodoInput;