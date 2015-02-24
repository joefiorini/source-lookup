/** @jsx React.DOM */
import {Route, DefaultRoute} from 'react-router';
import React from 'react';

import Placeholder from '../components/__placeholder__';
import SourceMap from '../components/source-map';
import App from '../components/app';
import NewSourceMap from '../components/source-map/new';


module.exports = (
/* jshint ignore:start */
    <Route handler={App}>
      <DefaultRoute name="index" handler={Placeholder} />
      <Route name="sourceMap" handler={SourceMap}>
        <Route name="new" path="/upload" handler={NewSourceMap} />
        <Route name="show" path="/:path" handler={Placeholder} />
      </Route>
      <Route name="sourceLocation" path="/:path/:line,:column" handler={Placeholder} />
    </Route>
/* jshint ignore:end */
);

