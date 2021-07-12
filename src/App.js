import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { LeftPane } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
      <LeftPane />
      <Switch>
        <Route path='/' exact>Home</Route>
        <Route path='/explore' exact>Explore</Route>
        <Route path='/notifications' exact>Notifications</Route>
        <Route path='/messages' exact>Messages</Route>
        <Route path='/bookmarks' exact>Bookmarks</Route>
        <Route path='/lists' exact>Lists</Route>
        <Route path='/profile' exact>profile</Route>
      </Switch>
      <div className='right_pane'>Right Pane</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
