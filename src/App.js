import { HashRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { toAuthor, toTask, toTasks } from "./routes";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { AuthorPage } from "./features/author/AuthorPage";
import Navigation from "./Navigation";
import Footer from "./common/Footer";

export const App = () => {
    return (
        <div>
            <HashRouter>

                <Navigation />

                <Switch>
                    <Route path={toTask()}>
                        <TaskPage />
                    </Route>
                    <Route path={toTasks()}>
                        <TasksPage onlyDone />
                    </Route>
                    <Route path={toAuthor()}>
                        <AuthorPage />
                    </Route>
                </Switch>
            </HashRouter>
            <Footer />
        </div>


    );

};