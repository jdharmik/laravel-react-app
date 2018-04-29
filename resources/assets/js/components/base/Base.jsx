import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './base.styl';

class Base extends React.PureComponent
{
    render(){
        return (
        <div className="container-fluid">
            {this.props.children}
        </div>
        )
    }
}

Base.defaultProps = {
};
Base.propTypes = {
	children: PropTypes.object.isRequired,
};

export default CSSModules(Base,styles,{allowMultiple:true});