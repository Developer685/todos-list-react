import React from 'react';

import Form from './Form';
import Tasks from './Tasks';
import HeadlineButtons from './HeadlineButtons';
import Section from './Section';
import Header from './Header';
import Main from './Main';


const tasks = [
  { id: 1, content: "robic reacta", done: false },
  { id: 2, content: "grac w gierki", done: false },
];

const hideDone = [];

const App = () => {
  return (
    <Main> 
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form key={tasks.id} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks key={tasks.id} tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<HeadlineButtons key={tasks.id} tasks={tasks} hideDone={hideDone} />}
      />
    </Main>
  );
}

export default App;
