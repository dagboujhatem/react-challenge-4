import React, { Component, Fragment } from "react";
import ItemTodo from "./ItemTodo";

export class ListTodo extends Component {

    todosFromLocalStorage = JSON.parse(localStorage.getItem('todos') || '[]');
    state = {
        todos: this.todosFromLocalStorage
    }



    render() {
        // console.log(this.state.todos) ;
        return (
            <div className="container mt-3">
                <table  className="table ">
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
