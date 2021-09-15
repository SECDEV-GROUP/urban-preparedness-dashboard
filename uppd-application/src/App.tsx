import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { fetchAvailableYears } from './store/modules/availableYearsStore';
import ThemeContainer from './ThemeContainer';
import { AppState } from './types';
import Loader from './components/BaseUIComponents/Loader';

const About = lazy(() => import('./components/About'));
const Home = lazy(() => import('./components/Home'));
const Info = lazy(() => import('./components/Info'));
const Navbar = lazy(() => import('./components/Navigation/Navbar'));
const SideDrawer = lazy(() => import('./components/Navigation/SideDrawer'));

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    height: '100vh',
  },
});

const App: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  // dispatching data that should set to our store on load
  dispatch(fetchAvailableYears('data-years'));

  const darkTheme: boolean = useSelector(
    (state: AppState) => state.AppControl.darkTheme,
  );

  const Main = withRouter(({ location }) => {
    return (
      <div>
        <Navbar />
        <SideDrawer />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/map" component={Home} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </div>
    );
  });

  return (
    <ThemeContainer darkThemeEnabled={darkTheme}>
      <Paper className={`${classes.root} App`}>
        <Suspense fallback={<Loader />}>
          <Router>
            <Main />
          </Router>
        </Suspense>
      </Paper>
    </ThemeContainer>
  );
};

export default App;
