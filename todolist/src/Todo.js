import react from 'react';

const Todo = ({id, task, deleteTodo}) => {
    return (
        <div>
            {task}
            <button onClick={() => deleteTodo(id)}>X</button>
        </div>
    )
};

export default Todo;