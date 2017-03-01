import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/actions'
import AddTodo from '../components/AddTodo'
import Footer from '../components/Footer'
import TodoList from '../components/TodoList'
import '../../style/style.scss'

class App extends Component{
    render(){
        const {dispatch,visibleTodos,visibilityFilter} =this.props
        return(
            <div>
                <AddTodo
                    onAddClick={text=>{
                        dispatch(addTodo(text))
                    }}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>{
                        dispatch(completeTodo(index))
                    }}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilerChange={filter=>{
                        dispatch(setVisibilityFilter(filter))
                    }}
                />
                <img src="/images/01.PNG" alt=""/>
                <h1>111111fffffffffffffffffffaa</h1>
                <div className="box"></div>
            </div>
        )
    }
}

function selectTodos(todos,filter){
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter((todo)=> todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter((todo)=> !todo.completed)
    }
}

function select(state){
    return{
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)