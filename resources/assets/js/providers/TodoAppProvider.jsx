import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import TodoAppRouter from 'routers/todoApp';

const TodoAppProvider = ({store}) => {
	return (
	<Provider store={store}>
		<TodoAppRouter />
	</Provider>
	);
};

export default hot(module)(TodoAppProvider);