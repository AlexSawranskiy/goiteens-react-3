import { Component } from 'react';
import {Container, Title, Option} from './ColorPicker.styled'
export class ColorPicker extends Component {
    render(){
        return (
            <Container>
                <Title>Color Picker</Title>
                <div>
                    {this.props.options.map(option => {
                        return <Option 
                        key = {option.label} 
                        backgroundColor={option.color}
                        >{option.label}
                    </Option>
                    })}
                </div>
            </Container>
        )
    }
}
export default ColorPicker;