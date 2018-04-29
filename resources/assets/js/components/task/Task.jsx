import styles from './task.styl';
import CSSModules from 'react-css-modules';
import React from 'react';
import {PropTypes} from 'prop-types';
import {debounce} from 'lodash';

class Task extends React.PureComponent {
    constructor(props)
    {
        super(props);
        this.updateTaskFun = this.updateTaskFun.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state= {
            name: props.name,
            description: props.description
        };
    }
    setName(value)
    {
        console.log('set name');
        console.log(value);
        this.setState({
            name: value 
        });
    }
    setDescription(value)
    {
        console.log('set description');
        console.log(value);
        this.setState({
            description: value
        });
    }

    updateTaskFun(){
        this.props.updateTask(this.props.id,{
            name: this.state.name,
            description: this.state.description
        });
    }

    handleInputChange(event) {
        console.log(name);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }    
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    {this.props.id}
                </div>
                <div className="col-sm-3">
                    {!this.props.isInEditMode && this.props.name}
                    
                    {this.props.isInEditMode && (<div className="input-group mb-3"> <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                        </div>
                        <input name="name" className="form-control" value={this.state.name} onChange={this.handleInputChange} />
                    </div>)}
                </div>
                <div className="col-sm-5">
                    {!this.props.isInEditMode && this.props.description}
                    {this.props.isInEditMode && <input name="description" className="form-control" value={this.state.description} onChange={this.handleInputChange} />}
                </div>
                <div className="col-sm-1">
                    {!this.props.loading && this.props.isInEditMode && <i className="fa fa-check" styleName="fa-btn" onClick={()=>(this.updateTaskFun())} aria-hidden="true">
                    </i>}
                    {!this.props.loading && !this.props.isInEditMode && <button className="btn btn-primary fa fa-pencil-square-o" onClick={()=>(this.props.setEditMode(true,this.props.id))} aria-hidden="true">
                    </button>}
                </div>
                <div className="col-sm-1">
                    {!this.props.loading && this.props.isInEditMode && <i onClick={()=>(this.props.setEditMode(false,this.props.id))} className="fa fa-times" styleName="fa-btn" aria-hidden="true">
                    </i>}
                    {!this.props.loading && !this.props.isInEditMode && <button onClick={()=>(this.props.deleteTask(this.props.id))} className="btn btn-danger fa fa-trash-o" aria-hidden="true">
                    </button>}
                    {this.props.loading && <i className="fa fa-2x fa-spinner fa-pulse"></i>}
                </div>
            </div>        
        )
    }
};

Task.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    setEditMode: PropTypes.func.isRequired
};
export default CSSModules(Task,styles,{allowMultiple:true});