const React = require('react');

//组件
import Input from '../../component/Input';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        let {main} = this.props;
        this.state = {
            inputList:main.loginInput
        };
    }
    componentWillMount(){
    }
    componentDidMount() {
    }
    render() {
        let {inputList} = this.state;
        return(
            <div className="module-login">
                <div className="login-wrap">
                    <div className="login-left">
                        <div className="login-left-title">
                            <p>交易所</p>
                            <p>后台管理系统</p>
                        </div>
                        <div className="login-left-tips">
                            <span className="login-line"></span>
                            <p>exchange</p>
                            <p>Background management system</p>
                        </div>
                    </div>
                    <div className="login-right">
                        LONGIN
                        <div className="login-right-name">
                            <em>登录</em>
                        </div>
                        <div className="login-right-frame">
                            {
                                this.createInput(inputList)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    createInput(data){
        let List = data.map((obj,index) =>{
                    <Input info={obj} index={index}/>
                });
        return List;
    }
}