import React from 'react';
import {RouteHandler} from 'react-router';

export default React.createClass({
    render: function() {
        return (
/* jshint ignore:start */
            <section>
                <h2>Sourcemap Reader</h2>
                <RouteHandler />
            </section>
/* jshint ignore:end */
        );
    }
})
