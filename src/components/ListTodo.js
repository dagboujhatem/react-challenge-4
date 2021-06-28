import React, { Component, Fragment } from "react";
import ItemTodo from "./ItemTodo";

export class ListTodo extends Component {

    todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]');
    state = {
        todos: this.todosFromLocalStorage
    }

   handleDelete = (index, e) => {
    //  todosLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]');

    //  for (var i =0; i< todosLocalStorage.length; i++) {
    //     var items = JSON.parse(todosLocalStorage[i]);
    //     if (items.itemId == 3) {
    //         items.splice(i, 1);
    //     }
    // }

    //    localStorage.removeItem();
       //console.log(index);
   }

    render() {
        // console.log(this.state.todos) ;
        return (
            <div className="container mt-3">
                <table  className="table">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map((todo, index) => {
                                return (
                                    <Fragment key={index}>
                                        <tr> 
                                            <td>{todo.name}</td>
                                             <td>{todo.description}</td>
                                             <td><button className="btn btn-danger" onClick={this.handleDelete.bind(this, index)}>Delete</button></td>
                                             <td><button className="btn btn-info">Detail</button></td>
                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListTodo;
