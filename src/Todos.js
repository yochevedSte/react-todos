import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoList from './ToDoList'
import MyForm from './MyForm';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "My TODO List",
            todoList: ["Eat Breakfast", "Go shopping", "Take a nap", "Workout"]
        }

     //   this.onButtonClick = this.onButtonClick.bind(this);
    }
    render() {

        return (
            <div>
                <h1>{this.state.text}</h1>
                <MyForm onButtonClick={this.onButtonClick} onTextChange={this.onTextChange}
                 buttonText ={ this.props.buttonText}  ref={(elem) => this.form = elem} stateText= {this.state.text}/>
                <ToDoList  todoList={this.state.todoList} />
            </div>
        );
    }

    onButtonClick = () =>{
        let todo =  this.state.text;
        this.setState({todoList: [...this.state.todoList, todo]
          });

          this.setState((state, props) =>
        { return {text: ""}});



          
          
    }

    onTextChange = (e) => {
        let val = e.target.value;
        this.setState((state, props) =>
        { return {text: val}});
    }
}

Todos.propTypes = {
    buttonText: PropTypes.string.isRequired
}

export default Todos;