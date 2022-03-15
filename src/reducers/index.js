import { combineReducers } from "redux";
import taskReducre from "./tasklist-reducer";
import todoListReducre from "./todolist-reducer";

const rootReducer = combineReducers({
    todoList: todoListReducre,
    task: taskReducre
});


export default rootReducer