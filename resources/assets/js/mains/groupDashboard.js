import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import extractDomData from 'utils/DomDataExtractor';
import GroupDashboardAppProvider from 'providers/GroupDashboardAppProvider.jsx';
import {updateServerDataInfoToStore} from 'utils/PageStoreUpdater.js';
import store from 'stores/groupDashboard';

const rootNode = document.getElementById('root');

const serverData = extractDomData({
    userId: 'userid',
    userEmail: 'useremail'
},rootNode);

updateServerDataInfoToStore(store,serverData);


ReactDOM.render(<GroupDashboardAppProvider />,rootNode);