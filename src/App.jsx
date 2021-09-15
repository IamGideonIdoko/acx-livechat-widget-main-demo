import {Route, Switch, BrowserRouter as Router} from "react-router-dom";
import Home from './pages/Home';
import { Container } from '@styles/App.styled';

const App = () => {
  return (
    <Router>
      <Switch>
        <Container>
          <Route exact path="/" component={Home} />
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
