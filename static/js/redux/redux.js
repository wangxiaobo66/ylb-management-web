import { combineReducers } from 'redux'

let infoList = {
    loginInput:[
        {
            type:"text",
            name:"username",
            img:"t1.jpg",
            placeholder:"请输入邮箱或手机号码"
        },
        {
            type:"password",
            name:"password",
            img:"t2.jpg",
            placeholder:"请输入密码"
        }
    ],
    user:1,
    id:1
};

function main(state=infoList,action){
    switch (action.type){
        default:
            return state;
    }
}

export const YLB = combineReducers({
    main//首页
});