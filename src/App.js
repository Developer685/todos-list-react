import React from 'react';

import { Form }  from 'react';
import { Tasks }  from 'react';
import { HeadlineButtons }  from 'react';
import { Section }  from 'react';
import { Header }  from 'react';
import { Main }  from 'react';


const tasks = [
  { id: 1, content: "robic reacta", done: false },
  { id: 2, content: "grac w gierki", done: false },
];

const hideDoneTasks = [];

function App() {
  return (
    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form key={tasks.id} />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks key={tasks.id} tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<HeadlineButtons key={tasks.id} tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Main>
  );
}

export default App;
