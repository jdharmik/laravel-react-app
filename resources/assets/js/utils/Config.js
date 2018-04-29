const rootNode = document.getElementById('root');
const baseUrl = rootNode.getAttribute('data-baseurl');
export default {
    baseUrl,
    apiBaseUrl: baseUrl+'/api'
};