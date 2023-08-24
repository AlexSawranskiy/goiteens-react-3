import { Component } from 'react';

export class ToDoList extends Component {
    
    render({text, completed}){
        return(
            <ul>
                <li>
                    <p>{text}</p>
                    <button>{completed}</button>
                </li>
            </ul>
        )
    }
}