import * as  _ from 'lodash';
export default (dataMap, domElem) => {
    return _.mapValues(dataMap, (value) => {
        console.log(value); 
        return domElem.getAttribute('data-'+value); 
    });
}