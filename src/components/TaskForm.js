// TaskForm.js

import React, { useState } from 'react';
import {useTaskContext} from "../context/TaskContext";

export function TaskForm() {
    const { addTask } = useTaskContext();
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(), // Уникальный идентификатор на основе текущего времени
            text: task,
        };
        addTask(newTask);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Добавить задачу"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
}







