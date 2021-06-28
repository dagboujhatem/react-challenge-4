import React, { Component } from "react";

const initialtState = {
  data: {
    name: "",
    description: "",
    nameError: "",
    descriptionError: "",
  },
};

const todosLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");

class DetailTodo extends Component {
  state = initialtState;

  componentDidMount() {
    const todosLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
    const id = this.props.match.params.idTodo;
    const todo = todosLocalStorage[id];
    this.setState({
      data: todo,
    });
    //console.log(this.state);
  }

  handleName = (e) => {
    this.setState({
      data: {
        name: e.target.value,
      },
    });
  };

  handleDescription = (e) => {
    this.setState({
      data: { description: e.target.value },
    });
  };

  validate = () => {
    let nameError = "";
    let descriptionError = "";

    if (!this.state.data.name) {
      nameError = "name is required";
      document.getElementById("name").classList.remove("is-valid");
      document.getElementById("name").classList.add("is-invalid");
    } else {
      document.getElementById("name").classList.remove("is-invalid");
      document.getElementById("name").classList.add("is-valid");
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }

    if (!this.state.data.description) {
      nameError = "description is required";
      document.getElementById("description").classList.remove("is-valid");
      document.getElementById("description").classList.add("is-invalid");
    } else {
      document.getElementById("description").classList.remove("is-invalid");
      document.getElementById("description").classList.add("is-valid");
    }

    if (descriptionError) {
      this.setState({ descriptionError });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const id = this.props.match.params.idTodo;
      todosLocalStorage[id].name = this.state.data.name;
    todosLocalStorage[id].description = this.state.data.description;
    
    localStorage.setItem('todos',JSON.stringify(todosLocalStorage));
      //console.log(this.state);
      //clear form
      // this.todo.name = this.state.data.name;
      // this.todo.description = this.state.data.description;
      
      this.setState(initialtState);
    }
  };
  handleCancel = () => {
    this.props.history.push("/");
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const todosLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
  //   const id = this.props.match.params.idTodo;
    
  //   todosLocalStorage[id].name = this.state.data.name;
  //   todosLocalStorage[id].description = this.state.data.description;
    
  //   localStorage.setItem('todos',JSON.stringify(todosLocalStorage));
  //   console.log(todosLocalStorage);
  // }
  
  render() {
    // const { name, description } = this.state.data;
    // console.log(description);
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="offset-3 col-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="text-start w-100">Name:</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  value={this.state.data.name || ""}
                  placeholder="Enter name"
                  onChange={this.handleName}
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.nameError}
                </div>
              </div>
              <div className="form-group mt-3">
                <label className="text-start w-100">Desription:</label>
                <input
                  id="description"
                  type="text"
                  className="form-control"
                  value={this.state.data.description || ""}
                  placeholder="Enter your Description"
                  onChange={this.handleDescription}
                  required
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.descriptionError}
                </div>
              </div>

              <button type="submit" className="btn btn-success">
                Valider
              </button>

              <button className="btn btn-secondary" onClick={this.handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTodo;
