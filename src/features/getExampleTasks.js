export const getExampleTasks = async () => {
    const response = await fetch("/todos-list-react/exampleTask.json");
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
};