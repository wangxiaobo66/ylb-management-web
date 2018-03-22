import { combineReducers } from 'redux'

function main(state={user:1,id:1},action){
    switch (action.type){
        default:
            return state;
    }
}

export const YLB = combineReducers({
    main//首页
});