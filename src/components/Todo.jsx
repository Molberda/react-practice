import './Todo.css'

function Todo(props){
    return (
    <div className='todo'>
        <h2>{props.title}</h2>
        <button>{props.button}</button>
        <p>ToDo</p>
    </div>
    )
}

export default Todo