import React from 'react';
import {PropTypes} from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './addTask.styl';

class AddTask extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.state = {
            name: '',
            description: ''
        };
    }
    setName(event)
    {
        console.log('set name');
        this.setState({
            name: event.target.value 
        });
    }
    setDescription(event)
    {
        console.log('set description');
        this.setState({
            description: event.target.value
        });
    }
    addTaskFun() {
        this.props.addTask({
            name: this.state.name,
            description: this.state.description
        });
        this.setState({
            name: '',
            description: ''
        });
    }
    render()
    {
        return (
        <div className="container text-center" styleName="addTask">
            <h1 styleName="createTaskHeader">Create task</h1><br/>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                </div>
                <input type="text" className="form-control" value={this.state.name} onChange={this.setName} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
            <br />
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                </div>
                <input type="text" className="form-control" value={this.state.description} onChange={this.setDescription} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>  
            <br/>
            <button className="btn btn-primary" onClick={()=> (this.addTaskFun())} >Submit</button>         
        </div>
        );
    }
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default CSSModules(AddTask,styles,{allowMultiple:true});