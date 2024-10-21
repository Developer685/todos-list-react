
import Form from './Form';
import TasksList from './TasksList';
import HeadlineButtons from './HeadlineButtons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { Main } from '../../GlobalStyle';
import { useTasks } from '../../useTasks';


const Tasks = () => {

  const {
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
        body={
          <TasksList
            removeTasks={removeTasks}
            oggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <HeadlineButtons
            setAllDone={setAllDone}
          />
        }
      />
    </Main>

  );
}

export default Tasks;