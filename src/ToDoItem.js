import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class ToDoItem extends Component {
    
    render() {
        return(
            <li>{this.props.value}</li>
        );
    }
}

export default ToDoItem;