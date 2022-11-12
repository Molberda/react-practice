import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
// import Counter from "./components/Counter.jsx"

function App() {
  const [showModal, setShowModal] = useState(false);

  function confirmDelete(){
    setShowModal(true)
  }

  function closeModal(){
    setShowModal(false)
    console.log('cancel')
  }

  function confirmModal(){
    setShowModal(false)
    console.log('confirm')
  }

  return (
    <div>
      <Title title="My ToDo List" />
      <input type="text" />
      <button>Add todo</button>
      <div className="todo__wrapper">
        <Todo confirm={confirmDelete} title="Finish Frontend" button="Done"/>
        <Todo confirm={confirmDelete} title="Finish Interview Section" button="In Progress" />
        <Todo confirm={confirmDelete} title="Land a $100K Job" button="Next Up" />
      </div>
      {showModal && <Modal close = {closeModal} confirm = {confirmModal} question="Are you sure?" />}
    </div>
  );
}

export default App;
