// import DeleteForeverOutlinedIcon from '@mui/icons';

import './task-view.css';
import AppInput from '../input/input';
import TodoList from '../todo-list/todo-list';
import { connect } from 'react-redux';
import { useState } from 'react';

function TaskView({ ...props }) {

    // const [todo, setTodo] = useState({
    //     title: '',
    //     deadline: new Date(),
    //     description: '',
    //     status: 'pending',
    //     priority: '',
    //     tasks: null
    // });

    return (
        <div className="task-view p-2">
            <div className='mb-3'>
                <AppInput onEnter={(data) => {
                    const { title, date } = data;
                    const todoItem = {
                        title: title,
                        deadline: date,
                        status: "pending",
                        priority: "none", // high, medium, low, none
                        tasks: []
                    };
                    props.dispatch({
                        type: 'ADD_TODO',
                        payload: todoItem
                    });

                    props.dispatch({
                        type: 'ADD_TASK',
                        payload: todoItem
                    });
                }} />
            </div>
            {/* <button onClick={() => {
                // the idea is to add the value.
                props.dispatch({
                    type: 'ADD_TODO',
                    payload: {
                        title: 'exam prepration',
                        description: 'preparing for the exam right here brother.',
                        status: 'pending',
                        deadline: new Date()
                    }
                });
            }}>click me</button> */}
            {/* <div>
                {JSON.stringify(props.todoList)}
                {props.todoList.length}
            </div> */}
            <div>
                <TodoList checkboxEvent={(value, item) => {
                    props.dispatch({
                        type: 'UPDATE_TODO',
                        payload: {
                            todo: item,
                            status: (value === true) ? 'completed' : (value === false) ? 'pending' : 'pending'
                        }
                    })
                }} list={props.todoList} />
            </div>
        </div>

        // <div className='task-view text-ellipses'>
        //     <div>
        //         this is teh content of the website
        //     </div>
        // </div>
    );
}

const mapStateToProps = (state) => {
    return state;
    /*{
        title: '',
        priority: '',
        deadline: '',
        description: '',
        status: 'pending | completed | deleted',
        task: {
                title: '',
                status: 'pending | completed'
        }[]
        created: new Date()
    }*/
}

export default connect(mapStateToProps)(TaskView);