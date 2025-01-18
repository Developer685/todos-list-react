import { TaskInput } from "../Input/styled";

import searchQuerryParamName from "../../searchQuerryParamName";
import { StyledForm } from "../Form/styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQuerryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQuerryParamName,
      value: target.value.trim() !== "" ? target.value : "",
    });
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