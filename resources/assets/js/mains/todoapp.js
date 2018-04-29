import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import extractDomData from 'utils/DomDataExtractor';
import TodoAppProvider from 'providers/TodoAppProvider.jsx';
import store from 'stores/todoApp';
import {updateServerDataInfoToStore} from 'utils/PageStoreUpdater.js';

const rootNode = document.getElementById('root');

const serverData = extractDomData({
    userId: 'userid',
    userEmail: 'useremail'
},rootNode);
console.log('server data');
console.log(serverData);
console.log(store.getState().toJS());
updateServerDataInfoToStore(store,serverData);
ReactDOM.render(<TodoAppProvider store={store} />,rootNode);