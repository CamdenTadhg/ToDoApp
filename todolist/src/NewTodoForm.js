import react, {useState} from 'react';

const NewTodoForm = ({addTodo}) => {
    const [task, setTask] = useState('');
    const handleChange = (event) => {
        setTask(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(task);
        setTask('');
    }

    return (
        <form onSubmit={handleSubmit} data-testid="todoform">
            <label htmlFor='todo'>Task: 
                <input type='text' id='todo' name='todo' placeholder='task' value={task} onChange={handleChange}/>
            </label>
            <button>Create ToDo</button>
        </form>
    )
}

export default NewTodoForm;