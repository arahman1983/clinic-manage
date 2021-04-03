import { Layout } from "./components";
import { Clinics } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/">
              <Clinics />
            </Route>
            <Route path="/appointments">
              <Clinics />
            </Route>
            <Route path="/members">
              <Clinics />
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
