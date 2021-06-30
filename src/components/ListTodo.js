import React, { Component, Fragment } from "react";


export class ListTodo extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
   // window.location.reload();
   const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
  //  this.setState = {
  //    todos: todosFromLocalStorage,
  //  };
  // this.state.todos = todosFromLocalStorage;
  this.state.todos = [... todosFromLocalStorage];
   console.log(this.state.todos);
   this.shouldComponentUpdate(this.props, this.state.todos);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("object");
    return this.state.todos != nextState.todos;
  }
  
  // todosFromLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
  

  handleDelete = (index) => {
    const todosLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
    todosLocalStorage.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todosLocalStorage));
    this.setState({
      todos: todosLocalStorage,
    });
  };

  handleDetails = (index) => {
      this.props.history.push(`/detailTodo/${index}`);
    //  console.log(index);
  }
  render() {
    // console.log(this.state.todos) ;
    return (
      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, index) => {
              return (
                <Fragment key={index}>
                  <tr>
                    <td>{todo.name}</td>
                    <td>{todo.description}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={this.handleDelete.bind(this, index)}> Delete</button>
                        <button className="btn btn-info " onClick={this.handleDetails.bind(this, index)}>Detail</button>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodo;
