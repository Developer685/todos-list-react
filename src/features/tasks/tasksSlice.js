import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,

    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: state => {
            state.tasks = state.tasks.map(task => ({ ...task, done: true }));
        },
        toggleTaskDone: (state, { id }) => {
            state.tasks = state.tasks.map(task =>
                task.id === id ? { ...task, done: !task.done } : task
            );
        },
        removeTask: () => (state, { id }) => {
            state.tasks = state.tasks.filter(task => task.id !== id);
        },

    },
});

export const { addTask, toggleHideDone, setAllDone, toggleTaskDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

