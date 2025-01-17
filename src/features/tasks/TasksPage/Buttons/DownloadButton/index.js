import { useDispatch } from "react-redux";
import { Button } from "../styled";
import { fetchExampleTasks } from '../../../tasksSlice';
import { useState } from "react";
const DownloadExampleTasksButton = () => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(fetchExampleTasks());
        setLoading(false);
    };

    return (
        <Button onClick={handleClick} disabled={loading}>
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default DownloadExampleTasksButton;