import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,

    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            if (payload.content.trim() !== "") {
                tasks.push(payload);
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
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },

    },
});

export const { addTask, toggleHideDone, setAllDone, toggleTaskDone, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;

