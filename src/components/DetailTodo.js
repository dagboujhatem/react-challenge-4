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
    const id = this.props.match.params.idTodo;
    const todo = todosLocalStorage[id];
    if(todo !== undefined)
    {
      this.setState({
        data: todo,
      });
    }else{
      this.setState(initialtState);
    }
  }

  handleName = (e) => {
    // first way 
    // let data = this.state.data;
    // data["name"] = e.target.value;
    // this.setState({data});

    // second way
      const newData = Object.assign(this.state.data, {
        name: e.target.value
      });
      this.setState({newData});
  };

  handleDescription = (e) => {
    const newData = Object.assign(this.state.data, {
      description: e.target.value
    });
    this.setState({newData});
  };

  validate = () => {
    let nameError = "";
    let descriptionError = "";
    if (!this.state.data.name) {
      nameError = "This field is required.";
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
      nameError = "This field is required.";
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
      todosLocalStorage.splice(id, 1, this.state.data);
      localStorage.setItem('todos',JSON.stringify(todosLocalStorage));
      this.setState(initialtState);
      this.props.history.push(`/`);
    }
  };
  handleCancel = () => {
    this.props.history.push("/");
  };
  
  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="offset-3 col-6">
          <h1 className="my-5 text-center text-primary">Todo details</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="text-start w-100">Name:</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  value={this.state.data.name || ""}
                  placeholder="Type the name here"
                  onChange={this.handleName}
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.nameError}
                </div>
              </div>
              <div className="form-group mt-3">
                <label className="text-start w-100">Desription:</label>
                <textarea
                  id="description"
                  rows="4"
                  className="form-control"
                  value={this.state.data.description || "" }
                  placeholder="Type the description here"
                  onChange={this.handleDescription}
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.descriptionError}
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button className="btn btn-secondary text-white" onClick={this.handleCancel}>
                Cancel
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTodo;
