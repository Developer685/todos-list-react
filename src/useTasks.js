import { useState, useEffect } from "react";

export const useTasks = () => {

    const getSavedTask = () => {

        const savedTask = localStorage.getItem("tasks");
        if (savedTask !== null) {
            return JSON.parse(savedTask);
        }
        else {
            return [];
        }

    };

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const [tasks, setTasks] = useState(getSavedTask);

    const removeTasks = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task, done: true,
        })));
    };

    const addNewTask = (content) => {
        if (content !== "") {
            setTasks(tasks => [
                ...tasks,
                {
                    content,
                    done: false,
                    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                }
            ]);
        }
    };
    useEffect(() => { localStorage.setItem("tasks", JSON.stringify(tasks)) }, [tasks]);

    return {
        tasks,
        hideDone,
        removeTasks,
        toggleTaskDone,
        setAllDone,
        addNewTask,
        toggleHideDone,
    };
};