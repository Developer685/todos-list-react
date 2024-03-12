import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import HeadlineButtons from './HeadlineButtons';
import Section from './Section';
import Header from './Header';
import { Main } from './GlobalStyle';
import { useTasks } from './useTasks';

const App = () => {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (

    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
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
