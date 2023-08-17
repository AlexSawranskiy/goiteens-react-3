import React from 'react';
import { Buttons } from './Buttons';
import { CounterValue } from './CounterValue';
import './Counter.css';

export class Counter extends React.Component {
    static defaultProps = {
        initialValue: 1,
    }

    // static propType = {
    //     value: propType.string.isRequired
    // }
    
    state = {
        value: this.props.initialValue,
    }
    
    handlerDecrement = () => {
        // Зміна стану при умові перезаписати значення
        // this.setState({
        //   value: this.state.value +1
        // })

        // Зміна стану від попереднього значення
        this.setState((prevState) => {
          return {
            value: prevState.value +1
          }
        })

        // const taregtEl = event.target;
    }
    handlerIncrement = () => {
      this.setState((prevState) => {
        return {
          value: prevState.value -1
        }
      })
    }
    render() {
        return <div className="Counter__controls">
        <CounterValue value = {this}/>
        <Buttons
        onDecrement={this.handlerDecrement}
        onIncrement={this.handlerIncrement}/>
    </div>
    }
} 