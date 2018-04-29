import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import GroupDashboardRouter from 'routers/groupDashboard';
import store from 'stores/groupDashboard';

const GroupDashboardAppProvider = () => {
	return (
	<Provider store={store}>
		<GroupDashboardRouter />
	</Provider>
	);
};

export default hot(module)(GroupDashboardAppProvider);