/** @jsx React.DOM */

var Router = require('react-router');
var React = require('react');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

export default React.createClass({

  render: function() {
    return (
/* jshint ignore:start */
      <div className="container">
        <h1>App</h1>
        <Link to="new">Upload Sourcemap</Link>
        <RouteHandler />
      </div>
/* jshint ignore:end */
    );
  }

});

