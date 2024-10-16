import Form from './Form';
import TasksList from './TasksList';
import HeadlineButtons from './HeadlineButtons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { Main } from '../../GlobalStyle';
import { useTasks } from '../../useTasks';

const Tasks = () => {

  const {
    tasks,
    hideDone,
    removeTasks,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    toggleHideDone,
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
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTasks={removeTasks} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<HeadlineButtons
          tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}
        />}
      />
    </Main>

  );
}

export default Tasks;