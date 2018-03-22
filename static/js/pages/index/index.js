//require('./index.scss');

const React = require('react');
const render = require('react-dom').render;

const { Provider, connect } = require('react-redux');
const { createStore, applyMiddleware } = require('redux');

const thunk = require('redux-thunk').default;
const { YLB } = require('../../redux/redux');

let store = createStore(YLB, applyMiddleware(thunk));

class component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="module-index">还是测试
            </div>
        )
    }
}

function select(state) {
    return {
        index: state.index
    }
}

let Index = connect(select)(component);

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById("index")
);