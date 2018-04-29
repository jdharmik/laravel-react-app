import styles from './loading.styl';
import CSSModules from 'react-css-modules';
import React from 'react';
const Loading = (props) => {
    return (
        <div styleName="loading">Loading&#8230;</div> 
    );
};


export default CSSModules(Loading,styles,{allowMultiple:true});
