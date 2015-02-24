import React from 'react';
import Show from './show';
import {SourceMapConsumer} from 'source-map';

export default React.createClass({
    getInitialState() {
        return {
            parsedMap: null,
            readProgress: 0
        };
    },
    loadFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();

        reader.onload = (e) => {
            var parsedObj = JSON.parse(e.target.result);
            var consumer = new SourceMapConsumer(parsedObj);
            this.setState({
                parsedMap: consumer,
                readProgress: 0
            });
        }

        reader.onprogress = (e) => {
            this.setState({
                readProgress: e.loaded / e.total
            });
        }

        reader.readAsText(file);
    },
    render() {

        var mappingDisplay;
        var progress;

        if (this.state.parsedMap !== null) {
/* jshint ignore:start */
console.log('parsedMap:', this.state.parsedMap);
            mappingDisplay = (<Show details={this.state.parsedMap} />);
/* jshint ignore:end */
        }

        if (this.state.readProgress > 0) {
/* jshint ignore:start */
            progress = (<p>Read {this.state.readProgress}%</p>);
/* jshint ignore:end */
        }

        return (
/* jshint ignore:start */
            <section>
            <input type="file" onChange={this.loadFile} />
            {progress}
            <section>
                {mappingDisplay}
            </section>
            </section>
/* jshint ignore:end */
        );
    }
});
