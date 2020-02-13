//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
// The Minerva UI Sub-Application
//
import React from 'react';

// App Level CSS
import './App.less';
import FileServerSettings from './components/FileServerSettings';

class App extends React.Component {

  render() {
    // Finally all is good, show the main app
    return (
      <div className="file-server-app">
        <FileServerSettings />
      </div>
    );
  }

}

export default App;
