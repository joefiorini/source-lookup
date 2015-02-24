import React from 'react';
import {State, RouteHandlerMixin} from 'react-router';

export default React.createClass({
    mixins: [RouteHandlerMixin, State],
    render() {
        var routeDepth = this.getRouteDepth();
        var routes = this.getRoutes();
        var route = this.getRoutes()[routeDepth-1];

        var family =
            routes.filter(function(route, idx) {
                return idx < routeDepth;
            });

        var names =
            family.map(function(route) {
                return route.name;
            });

        /* jshint ignore:start */
        return (<em>Todo: {names.join('->')}</em>);
        /* jshint ignore:end */
    }
})
