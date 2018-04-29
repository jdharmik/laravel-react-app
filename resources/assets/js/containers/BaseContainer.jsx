import React from 'react';
import { connect } from 'react-redux';
import Base from 'components/base';

class BaseContainer extends React.Component {

	render() {
		return (
			<Base {...this.props} />
		);
	}
}

BaseContainer.propTypes = {};

BaseContainer.defaultProps = {};

const mapStateToProps = (state) => state.toJS();

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);