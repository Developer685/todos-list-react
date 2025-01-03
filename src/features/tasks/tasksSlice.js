import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage, saveTasksInLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,

    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            if (payload.content.trim() !== "") {
                tasks.push(payload);
                saveTasksInLocalStorage(tasks);
            }
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: state => {
            const allDone = state.tasks.every(task => task.done);
            state.tasks.forEach(task => {
                task.done = !allDone;
            });
            saveTasksInLocalStorage(state.tasks);
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
            saveTasksInLocalStorage(tasks);
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
            saveTasksInLocalStorage(tasks);
        },
        fetchExampleTasks: () => { },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
            saveTasksInLocalStorage(state.tasks);
        },
    }
});

export const { addTask, toggleHideDone, setAllDone, toggleTaskDone, removeTask, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

