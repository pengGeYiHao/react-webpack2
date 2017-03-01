import React,{Component} from 'react'

export default class Todo extends Component {
    render(){
        return(
                <li
                    onClick={this.props.onClick}
                    style={{
                        //textDecoration: this.props.completed ? 'line-through':'none',
                        backgroundColor: this.props.completed ? 'pink':'yellow',
                        cursor: this.props.completed?'default':'pointer'
                    }}
                >
                    {this.props.text}
                </li>
            )

    }
}