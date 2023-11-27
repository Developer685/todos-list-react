import React, { useState } from 'react';

import Form from './Form';
import Tasks from './Tasks';
import HeadlineButtons from './HeadlineButtons';
import Section from './Section';
import Header from './Header';
import Main from './Main';


const App = () => {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "robic reacta", done: false },
    { id: 2, content: "grac w gierki", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form key={tasks.id} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks key={tasks.id} tasks={tasks} hideDone={hideDone} removeTasks={removeTasks} />}
        extraHeaderContent={
          <HeadlineButtons
            tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}

          />
        }
      />
    </Main>
  );
}

export default App;
