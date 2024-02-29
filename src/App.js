import React, { useEffect, useState } from 'react';

import Form from './Form';
import Tasks from './Tasks';
import HeadlineButtons from './HeadlineButtons';
import Section from './Section';
import Header from './Header';
import Main from './Main';


const App = () => {
  const getSavedTask = () => {

    const savedTask = localStorage.getItem("tasks");
    if (savedTask !== "") {
      return JSON.parse(savedTask);
    };
  };

  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState(getSavedTask);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

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


  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form key={tasks.id} addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<HeadlineButtons
          tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}
        />}


      />
    </Main>
  );
}

export default App;
