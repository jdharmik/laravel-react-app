import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import BaseContainer from 'containers/BaseContainer';
import NotFound from 'components/notFound';
import GroupDashboardBaseContainer from 'containers/GroupDashboardBaseContainer';
import GroupDashboardBaseComponent from 'components/groupDashboardBase';
import {onEnterDefaultGroupDashboardRoute,onChangeDefaultGroupDashboardRoute} from './groupDashboardRouteHandlers.js';

const appRoutes = (
	<Route path="/" component={BaseContainer} >
		<Route path="details" component={GroupDashboardBaseContainer} onChange={onChangeDefaultGroupDashboardRoute}  onEnter={onEnterDefaultGroupDashboardRoute} />
        <Route path="*" component={NotFound} />
	</Route>
);
const GroupDashboardRouter = () => (
	<Router history={hashHistory}>
		{appRoutes}
	</Router>
);
export default GroupDashboardRouter;