import Backdrop from "./component/Backdrop";
import Modal from "./component/Modal";
import Todo from "./component/Todo";

function App() {
  return (
    <div>
       <h1>My todos</h1>
      <Todo text="Learn React"/>
      <Todo text="Learn Angular"/>
      <Todo text="Learn Vue"/>
      <Modal/>
      <Backdrop/>
    </div>
  );
}

export default App;
