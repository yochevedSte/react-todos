import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class MyForm extends Component {
    constructor(props){
        super(props);
        this.input = null;
    }
    render() {
        return (
            <form>
                <input type="text" id="txtTodo" onChange={this.props.onTextChange} ref={elem => this.input = elem} value={this.props.stateText}/>
                <button type="button" onClick={this.props.onButtonClick}>{this.props.buttonText}</button>
            </form>
        );
    }
}
export default MyForm;