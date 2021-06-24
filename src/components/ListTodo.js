import React, { Component, Fragment } from "react";
import ItemTodo from "./ItemTodo";

export class ListTodo extends Component {
  
    todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]');
    state = {
        todos: this.todosFromLocalStorage
    }
   
    
    
  render() {
    console.log(this.state.todos) ;
    return (
      <div className="container mt-3">
        
      </div>
    );
  }
}

export default ListTodo;
