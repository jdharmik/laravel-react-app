import Immutable from 'immutable';
import actionConsts from 'constants/actions';
import * as _ from 'lodash';
import {prepareHashedObjectsForArraysInJSON} from 'utils/JsonFormatter';
const initialState = Immutable.fromJS({
    data: [],
    loading: false,
    error: ''
});

const taskReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case actionConsts.get('LOADING_IN_TASK'):
        if(action.id!=undefined)
        {
            let tasksList = state.getIn(['data']);
            tasksList=prepareHashedObjectsForArraysInJSON(tasksList,'id');
            if(tasksList[action.id]==undefined)
            {
                return state;
            }
            tasksList[action.id]['loading'] = action.loading;
            return state.set('data',Object.values(tasksList));
        } else{
            return state.set('loading',action.loading);                
        }
        case actionConsts.get('SET_ERROR_IN_TASK'):
            if(action.id!=undefined)
            {
                let tasksList = state.getIn(['data']);
                tasksList=prepareHashedObjectsForArraysInJSON(tasksList,'id');
                tasksList[action.id]['error'] = action.error;
                return state.set('data',Object.values(tasksList));
            } else{
                return state.set('error',action.error);                
            }
        case actionConsts.get('SET_EDIT_MODE_IN_TASK'):
            if(action.id!=undefined)
            {
                let tasksList = state.getIn(['data']);
                tasksList=prepareHashedObjectsForArraysInJSON(tasksList,'id');
                tasksList[action.id]['isInEditMode'] = action.isInEditMode;
                return state.set('data',Object.values(tasksList));
            } else{
                return state;                
            }            
        case actionConsts.get('SET_TASKS_DATA'): 
            const formattedTasks = action.data.map((task)=>{
                task.loading = false;
                task.isInEditMode = false;
                task.error = '';
                return task;
            });  
            return state.set('data',formattedTasks); 
        case actionConsts.get('SET_A_SPECIFIC_TASK'): 
            let tasksList = state.getIn(['data']);
            tasksList=prepareHashedObjectsForArraysInJSON(tasksList,'id');
            if(action.id!=undefined)
            {
                tasksList[action.id]= action.data;
                console.log('tasks list ');
                console.log(tasksList);
                return state.set('data',Object.values(tasksList));
    
            }else {
                let newTasks = state.get('data');
                action.data.loading = false;
                action.data.isInEditMode = false;
                action.data.error = '';
                newTasks.push(action.data);
                console.log('tasks list ');
                console.log(newTasks);                
                return state.set('data',newTasks);
            }

            case actionConsts.get('DELETE_A_SPECIFIC_TASK'):
            console.log('action is');
            console.log(action);
            const newtasks = state.get('data').filter((obj) => {
                console.log('object is');
                console.log(obj);
                if(!(_.isEqual(obj.id, action.id)))
                    return obj;
            }); 
            return state.set('data',newtasks);           
        default:
            return state;     
    }
    return state;
};

export default taskReducer;