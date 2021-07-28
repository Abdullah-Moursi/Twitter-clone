import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { LeftPane } from "./components";
import Head from "./components/Head";
import Home from "./components/Home";

const App = () => {
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e8512624ba514cd8bcfdf139be0124e9"
      )
      .then((response) => setInfos(response.data.articles));
    console.log(infos);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Switch>
          <Route path="/" exact>
            <Home infos={infos} />
          </Route>
          <Route path="/explore" exact>
            Explore
          </Route>
          <Route path="/notifications" exact>
            Notifications
          </Route>
          <Route path="/messages" exact>
            Messages
          </Route>
          <Route path="/bookmarks" exact>
            Bookmarks
          </Route>
          <Route path="/lists" exact>
            Lists
          </Route>
          <Route path="/profile" exact>
            profile
          </Route>
        </Switch>
        <div className="right_pane">Right Pane</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
