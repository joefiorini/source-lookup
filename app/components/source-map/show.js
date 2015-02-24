import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            lineNumber: 0,
            columnNumber: 0,
            originalLocation: null
        };
    },
    setLineNumber(e) {
        this.setState({ lineNumber: e.target.value });
    },
    setColumnNumber(e) {
        this.setState({ columnNumber: e.target.value });
    },
    calculateLine() {
        console.log('calculating from', this.state);
        let location =
            this.props.details.originalPositionFor({
                line: parseInt(this.state.lineNumber),
                column: parseInt(this.state.columnNumber)
            });
        console.log('got:', location);
        this.setState({
            originalLocation: location
        });
    },
    render() {
        var parsedMap = this.props.details;
        var originalLocation;

        if (this.state.originalLocation !== null) {
            let location = this.state.originalLocation;
            let identifier;

            if (location.name !== null) {
                /* jshint ignore:start */
                identifier = (<p>Referring to "{location.name}"</p>);
                /* jshint ignore:end */
            }

            originalLocation = (
                /* jshint ignore:start */
                <section>
                    You can find what you're looking for at:
                    <p>{location.source}</p>
                    <p>Line {location.line}, Column {location.column}</p>
                    {identifier}
                </section>
                /* jshint ignore:end */
            );
        }

        return (
/* jshint ignore:start */
            <div>
                <h3>Sourcemap for:</h3>
                <section>
                    <p>{parsedMap.file}</p>
                    <p>Version: {parsedMap.version}</p>
                </section>
                <section>
                    <h4>Lookup Line Number</h4>
                    <label>
                        Line:
                        <input type="number" onChange={this.setLineNumber} />
                    </label>
                    <label>
                        Column:
                        <input type="number" onChange={this.setColumnNumber} />
                    </label>
                    <button onClick={this.calculateLine}>Get Line Number</button>
                </section>
                <section>
                    {originalLocation}
                </section>
            </div>
/* jshint ignore:end */
        );
    }
});
