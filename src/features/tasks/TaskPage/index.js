import Section from '../../../common/Section';
import { Container } from './styled';
import Header from '../../../common/Header';
import { Main } from '../../../GlobalStyle';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../tasksSlice';
import { useSelector } from 'react-redux';


const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (

        <Main>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Zadanie nie istnieje"}
                body={<>
                    <Container>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </Container>
                </>
                }
            />
        </Main>

    );
}

export default TaskPage; 