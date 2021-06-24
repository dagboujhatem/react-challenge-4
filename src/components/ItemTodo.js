import React from 'react'

function ItemTodo(name, description) {
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
        </tr>
    )
}

export default ItemTodo;
