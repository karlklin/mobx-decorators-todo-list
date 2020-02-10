import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";
import store from "./ObservableTodoStore";

function App() {
  return (
      <div className="App">
        <ToDoList store={store} />
      </div>
  );
}

export default App;
