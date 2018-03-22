const React = require('react');
const render = require('react-dom').render;

const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');

const thunk = require('redux-thunk').default;
const { YLB } = require('../../redux/redux');

let store = createStore(YLB, applyMiddleware(thunk));

import {Router, Route, Link, hashHistory, IndexRoute, withRouter} from 'react-router';

//引入自页面
import Index from '../index/index';
import Login from '../login/login';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let {main} = this.props;
        console.log(main);
        return (
            <div className="module-index">
                {this.props.children}
            </div>
        )
    }
}
function select(state){
    return {
        main: state.main
    }
}
let App = connect(select)(Main);
let INDEX = connect(select)(Index);
let LOGIN =connect(select)(Login);

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component = {withRouter(INDEX)}/>
                <Route path="index" component={INDEX}/>
                <Route path="login" component={LOGIN}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('index')
);