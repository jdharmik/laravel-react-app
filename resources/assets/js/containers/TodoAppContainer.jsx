import React from 'react';
import TodoAppBase from 'components/todoAppBase';
import { connect } from 'react-redux';
import {    
    deleteTaskThunk,
    updateTaskThunk,
    createTaskThunk,
    isInEditModeThunk
} from 'thunks/todoAppThunks';

class TodoAppContainer extends React.Component
{
    render(){
        return <TodoAppBase {...this.props}/>
    }
}

const mapStateToProps = (state) => (state.toJS());

const mapDispatchToProps = (dispatch) => ({
	addTask: (data) => {
        dispatch(createTaskThunk(data));
    },
    deleteTask: (id) => {
        dispatch(deleteTaskThunk(id));
    },
    updateTask: (id,data) => {
        dispatch(updateTaskThunk(id,data));
    },
    isInEditMode: (status,id) => {
        dispatch(isInEditModeThunk(status,id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer);