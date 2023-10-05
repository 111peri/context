import React from 'react';
import{useTaskContext} from "../context/TaskContext";

export function TaskList() {
    const { tasks, deleteTask } = useTaskContext();

    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => deleteTask(task.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
}





