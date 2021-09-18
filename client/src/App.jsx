/* eslint-disable spaced-comment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Faqs from './pages/Faq';
import Home from './pages/Home';
import { useEffect } from 'react';
import CentrifugeClient from 'centrifuge';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD:client/src/App.js
import { saveVision } from 'redux/organizationVision.slice';
import { activateSnackbar } from 'redux/snackbar.slice';
import { setNewMission } from './services/missionAPI';
=======
import { saveVision } from './redux/organizationVision.slice';
import { activateSnackbar } from './redux/snackbar.slice';
>>>>>>> 30620f91486a710e2a622929f6fe8eac966d7d7f:client/src/App.jsx

function App() {
  const dispatch = useDispatch();
  const centrifugeConnect = new CentrifugeClient('wss://realtime.zuri.chat/connection/websocket', { minRetry: 100000 });
  // const centrifugeConnect = new CentrifugeClient('ws://localhost:8000/connection/websocket');
  // centrifugeConnect.setToken(
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM3MjIiLCJleHAiOjE2MzIwMzAyNjV9.mR1EBjkfXce2CZ0H3UEYLOQCxdLlhtg32XBJldSqbno'
  // );
  useEffect(() => {
    centrifugeConnect.on('connect', function (ctx) {
      //  console.log('connected', ctx);
      dispatch(activateSnackbar({ content: 'Connected to Centifugo 🥳', severity: 'info' }));
    });

    centrifugeConnect.on('disconnect', function (ctx) {
      //  console.log('disconnected', ctx);
      dispatch(activateSnackbar({ content: 'Failed to connect to Centifugo 😭', severity: 'error' }));
    });

    centrifugeConnect.subscribe('goalstest', function (ctx) {
      //  console.log('goalstest', ctx);
    });
    centrifugeConnect.subscribe('edit_vision', function (ctx) {
      //  console.log('edit_vision', ctx);
      dispatch(saveVision(ctx.data));
    });

    centrifugeConnect.connect();

    console.log(setNewMission());
  }, []);
  return (
    <>
      <Router basename="/goals">
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/faqs" component={Faqs} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
