import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './groupDashboardBase.styl';

console.log('styles are');
console.log(styles);
class GroupDashboardBase extends React.PureComponent
{
    render()
    {
       return (<div styleName="group">
            <h1>
                Hello world145 dsdfdf 
                
            </h1>
            <button styleName="btn">
                Its working
            </button>
        </div>)
    }
}

export default CSSModules(GroupDashboardBase,styles);