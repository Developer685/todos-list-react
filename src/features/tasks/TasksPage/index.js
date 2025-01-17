import TasksList from './TasksList';
import HeadlineButtons from './Buttons/index';
import DownloadExampleTasksButton from './Buttons/DownloadButton';
import Form from './Form';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import { Main } from '../../../GlobalStyle';
import Search from './Search';


const TasksPage = () => {
  return (

    <Main>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<DownloadExampleTasksButton />}
        body={<Form />}
      />
      <Section

        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<HeadlineButtons />}
        body={<TasksList />}

      />
    </Main>

  );
}

export default TasksPage;