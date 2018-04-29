import actionConsts from 'constants/actions';
const setServerData = (serverData) => ({
    type: actionConsts.get('SET_PAGE_SERVER_DATA'),
    data: serverData
});

const setClientData = (clientData) => ({
    type: actionConsts.get('SET_PAGE_CLIENT_DATA'),
    data: clientData
});

export {
    setServerData,
    setClientData
};