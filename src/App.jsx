import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  let isModalOpen = false
  return (
    <div>
      <Title title="My ToDo List" />
      <div className="todo__wrapper">
        <Todo 
        title="Finish Frontend" 
        button="Done" />
        <Todo 
        title="Finish Interview Section" 
        button="In Progress" />
        <Todo 
        title="Land a $100K Job" 
        button="Next Up" />
      </div>
      {isModalOpen ? <Modal 
      question="Are you sure?"
      /> : null }
    </div>
  );
}

export default App;


// minute 47:11