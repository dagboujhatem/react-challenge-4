import React, { Component, Fragment } from "react";


export class ListTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem("todos") || "[]"),
    };
  }


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
  }
  render() {
    return (
      <div className="container-fuild my-5">
        <div className="row">
          <div className="offset-2 col-sm-8">
            <table className="table table-striped table-hover text-center">
              <thead>
                <tr>
                  <th>Name</th>
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
                            onClick={this.handleDelete.bind(this, index)}>
                            <i className="fa fa-trash"></i>   Delete
                      </button>
                          <button className="btn btn-info text-white" onClick={this.handleDetails.bind(this, index)}>
                            <i className="fa fa-edit"></i> Details</button>
                        </td>
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodo;
