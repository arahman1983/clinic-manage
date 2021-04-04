import { Layout } from "./components";
import { Clinics , Members} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
            <Switch>
                <Route path="/" exact>
                  <Clinics />
                </Route>
                <Route path="/clinics" exact>
                  <Clinics />
                </Route>
                <Route path="/appointments">
                  <Clinics />
                </Route>
                <Route path="/members">
                  <Members />
                </Route>
                <Route path="/patients">
                  <Clinics />
                </Route>
            </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
