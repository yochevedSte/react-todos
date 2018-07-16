import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem'

class ToDoList extends Component {
    render() {
        const todoList = this.props.todoList;
        return (<ul>
            {todoList.map((item, index) => <ToDoItem key={index} value={item}/>)}
        </ul>
        );

    }
}


export default ToDoList;