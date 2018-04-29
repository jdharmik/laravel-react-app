var path       = require("path");
var APP_DIR = path.resolve(__dirname,'../');
const packageJSON = require('../package.json');

module.exports = {
	
	entries:{
		groupdashboard : [			
			path.resolve(APP_DIR,'resources/assets/js/mains/groupDashboard.js')
		],
		todoapp: [
			path.resolve(APP_DIR,'resources/assets/js/mains/todoapp.js')
		]
	},
	nodePackages:{
  
	},
	bowerPackages:{

	}

}