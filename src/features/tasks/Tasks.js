import Form from './Form';
import TasksList from './TasksList';
import HeadlineButtons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import { Main } from '../../GlobalStyle';
import DownloadExampleTasksButton from './Buttons/DownloadButton';

const Tasks = () => {

  return (

    <Main>
      <Header title="Lista zadań" />

      <Section

        title="Dodaj nowe zadanie"
        extraHeaderContent={<DownloadExampleTasksButton />}
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<HeadlineButtons />}
      />
    </Main>

  );
}

export default Tasks;