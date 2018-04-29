import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import BaseContainer from 'containers/BaseContainer';
import NotFound from 'components/notFound';
import TodoAppContainer from 'containers/TodoAppContainer';
import { onEnterTodoAppDetailsRoute,onChangeTodoAppDetailsRoute,onEnterCreateTodoRoute,onEnterEditTodoRoute,onEnterDeleteTodoRoute } from './todoAppRouteHandlers.js';

const appRoutes = (
	<Route path="/" component={BaseContainer} >
		<Route path="details" component={TodoAppContainer} onChange={onChangeTodoAppDetailsRoute}  onEnter={onEnterTodoAppDetailsRoute} />
		<Route path="create" component={TodoAppContainer} onEnter={onEnterCreateTodoRoute} />
		<Route path="edit/:id" component={TodoAppContainer} onEnter={onEnterEditTodoRoute} />
		<Route path="delete/:id" component={TodoAppContainer} onEnter={onEnterDeleteTodoRoute} />
        <Route path="*" component={NotFound} />
	</Route>
);
const TodoAppRouter = () => (
	<Router history={hashHistory}>
		{appRoutes}
	</Router>
);
export default TodoAppRouter;