import React from 'react';
import { Route } from 'react-router-dom'

import InfoSiteContainer from '../InfoSite/InfoSiteContainer';

function App() {
  return (
    <React.Fragment >
      <Route path="/" component={InfoSiteContainer} />
    </React.Fragment>
  );
}

export default App;
