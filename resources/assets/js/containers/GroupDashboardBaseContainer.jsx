import React from 'react';
import GroupDashboardBase from 'components/groupDashboardBase';
import { connect } from 'react-redux';

class GroupDashboardBaseContainer extends React.Component
{
    render(){
        return <GroupDashboardBase {...this.props}/>
    }
}

const mapStateToProps = (state) => (state.toJS());

const mapDispatchToProps = (dispatch) => ({
	moveToDashboard: () => {
		dispatch(moveToDashboardScreen());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDashboardBaseContainer);