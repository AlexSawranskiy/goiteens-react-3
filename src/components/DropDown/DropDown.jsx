import React from 'react';
import './DropDown.css'

export class DropDown extends React.Component {
    state = {
        visible: false
    }

    toogle = () => {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    
    render(){
        return (
            <div className="Dropdown">
              <button
                type="button"
                className="Dropdown__toggle"
                onClick = {this.toogle}
              >
              Open
              </button>
              {this.state.visible && <div className="Dropdown__menu">Випадаюче меню</div>}
            </div>
        )
    }
}