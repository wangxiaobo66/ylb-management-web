const React = require('react');
const render = require('react-dom').render;

import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="module-index">123
            </div>
        )
    }
}