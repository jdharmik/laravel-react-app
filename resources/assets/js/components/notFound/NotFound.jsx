import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './notfound.styl';

class NotFound extends React.Component {

	render() {
		return (
			<div styleName="notfound-component">
				<p>Page not found</p>
			</div>
		);
	}
}

NotFound.propTypes = {};
NotFound.defaultProps = {};

export default CSSModules(NotFound, styles,{ allowMultiple: true });