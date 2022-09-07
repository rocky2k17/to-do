import logo from './logo.svg';
import './App.css';
import TodoList from './Components/TodoList';
// import TodoItem from './Components/TodoItem';
import TodoInput from './Components/TodoInput';

function App() {
  return (
    <div className="App">
      <h3>ToDo List</h3>  
      <TodoInput />
      <TodoList />
      {/* <TodoItem /> */}
    </div>
  );
}

export default App;
