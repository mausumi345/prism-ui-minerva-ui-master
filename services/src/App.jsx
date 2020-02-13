//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// The Minerva UI Sub-Application
//
import React from 'react';

// App Level CSS
import './App.less';
import ShareLevelPermissions from './components/ShareLevelPermissions';

class App extends React.Component {

  render() {
    // Finally all is good, show the main app
    return (
      <div className="file-server-app">
        <ShareLevelPermissions />
      </div>
    );
  }

}

export default App;
