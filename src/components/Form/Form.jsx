import { Component } from "react";

export class Form extends Component{
    state = {
        name: '',
        tag: ''
    }
    handleInput = (e) => {
        const {name, value} = e.currentTarget

        this.setState({
            [name]: value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.onChange(this.state);
    }
    
}