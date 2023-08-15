import React from 'react';
import './Counter.css';

export class Counter extends React.Component {
    // static defaultProps = {
    //     value: 0,
    // }

    // static propType = {
    //     value: propType.string.isRequired
    // }
    
    state = {
        value: 10,
    }
    
    handlerDecrement = (event) => {
        console.log('Збільшуємо на 1')

        // const taregtEl = event.target;
    }
    handleIncrement = (event) => {
        console.log("Зменшуємо на 1")
    }
    render() {
        return <div className="Counter__controls">
        <span className="Counter__value">{this.state.value}</span>
      <button type="button" onClick={this.handlerDecrement}>
        Збільшити на 1
      </button>
      <button type="button" onClick={this.handleIncrement}>
        Зменшити на 1
      </button>
    </div>
    }
} 