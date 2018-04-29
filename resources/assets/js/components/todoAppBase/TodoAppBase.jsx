import React from 'react';
import {PropTypes} from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './todoAppBase.styl';
import Loading from 'components/loading';
import Task from 'components/task';
import AddTodo from 'components/addTask';
import * as _ from 'lodash';

console.log('styles are');
console.log(styles);
class TodoAppBase extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.getRef = this.getRef.bind(this);
    }
    getRef(ref)
    {
        this.task = ref;
    }
    render()
    {
        // console.log('props in todo app base is sdf');
        // console.log(this.props);
        const newTasks = this.props.task.data.map(task =>
                (
                <li className="list-group-item" key={task.id}>
                    <Task {...task} deleteTask={this.props.deleteTask} setEditMode={this.props.isInEditMode} updateTask={this.props.updateTask} />
                </li>
                )
            );
        // const tasks = this.props.task.data;
        // console.log(tasks);
        // const newTasks = [];
        // for(var i=0; i < tasks.length; i++) {
        //     newTasks[i] = (
        //         <li key={tasks[i].id}>
        //             {tasks[i].name}
        //         </li>
        //     );
        // }
    
        return (
            <div className="container" styleName="todo-container">
                {this.props.task.loading && <Loading />}
                {/* <input type="text" ref={this.getRef} value={this.task.value} />  */}
                <h1 className="text-center"> <b>TODO LIST APP</b> </h1>
                <AddTodo addTask = {this.props.addTask} />
                <br/>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-sm-2">
                                <b>Id</b>
                            </div>
                            <div className="col-sm-3">
                                <b>Name</b>
                            </div>
                            <div className="col-sm-5">
                                <b>Description</b>
                            </div>
                            <div className="col-sm-1">
                                <b>Edit</b>
                            </div>
                            <div className="col-sm-1">
                                <b>Delete</b>
                            </div>
                        </div>
                    </li>
                    {newTasks}
                </ul>
            </div>
        );
    
    }
}

TodoAppBase.propTypes = {
    addTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};

export default CSSModules(TodoAppBase,styles);