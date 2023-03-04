import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <h1>My todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn Angular" />
      <Todo text="Learn Vue" />
    </div>
  );
}

export default App;
