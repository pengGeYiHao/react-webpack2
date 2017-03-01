import React,{Component} from 'react'

export default class Footer extends Component{
    renderFilter(filter,name){
        if(filter===this.props.filter){
            return name
        }
        return(
            <a href="#"
                onClick={e=>{
                    e.preventDefault()
                    this.props.onFilerChange(filter)
                }}
            >
                {name}
            </a>
        )
    }
    render(){
        return (
            <p>
                显示：
                {' '}
                {this.renderFilter('SHOW_ALL','全部')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED','以删除')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE','未删除')}
            </p>
        )
    }
}