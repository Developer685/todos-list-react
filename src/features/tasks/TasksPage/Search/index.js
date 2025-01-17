import { TaskInput } from "../Input/styled";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import searchQuerryParamName from "../../searchQuerryParamName";
import { StyledForm } from "../Form/styled";
const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQuerryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQuerryParamName);
        } else {
            searchParams.set(searchQuerryParamName, target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <StyledForm>
            <TaskInput
                value={query || ""}
                placeholder="Filtruj zadania"
                onChange={onInputChange}
            />
        </StyledForm>
    );
};

export default Search;