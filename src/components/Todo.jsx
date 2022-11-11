import './Todo.css'

function Todo(props){
    function deleteTodo(id){
        console.log('delete', props.title)
    }
    return (
    <div className='todo'>
        <h2>{props.title}</h2>
        <button onClick={() => deleteTodo()}>{props.button}</button>
        <p>ToDo</p>
    </div>
    )
}

export default Todo