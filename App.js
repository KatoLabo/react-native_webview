import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

//遷移先のファイルを指定
import first from './first';
import google from './google';
import yahoo from './yahoo';

const App = () => {

  return (
    <Router>
      <Scene key="root">
        <Scene key="FIRST"
          component={first}
          title = 'first'
          initial
        />
        <Scene key="GOOGLE"
          component={google}
          title = 'google'
        />
        <Scene key="YAHOO"
          component={yahoo}
          title = 'yahoo'
        />
      </Scene>
    </Router>
  );
}

export default App;
