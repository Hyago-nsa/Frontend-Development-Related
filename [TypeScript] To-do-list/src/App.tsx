import "./App.css";
import Todos from "./components/Todos";
import Todo from "./assets/types/todo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodohandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  };

  return (
    <div>
      <TodoForm onAddTodo={addTodohandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
};

export default App;
