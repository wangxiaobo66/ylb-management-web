const React = require('react');

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let {obj,index} = this.props;
        console.log(obj,'***');
        return(
            <div className="module-input" key={"div"+index}>
                <span className="login-user" key={"span"+index}>
                </span>
                <input id={obj.name} name={obj.name} type={obj.type}
                       onChange={this.change()} className="login-input"
                       placeholder={obj.placeholder} key={"input"+index}/>
            </div>
        );
    }
    change(){

    }
}

Input.PropTypes = {
    obj:React.PropTypes.object,
    index:React.PropTypes.number
};