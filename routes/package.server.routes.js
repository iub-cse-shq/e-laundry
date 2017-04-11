module.exports = function(app){

 var packages = require('./../controllers/packages.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/packages')
	.get(packages.list)
	.post(packages.create);

  app.route('/api/packages/:orderId')
	.get(packages.read)
  .delete(users.requiresLogin, packages.delete);

	app.route('/api/packages/edit/:orderId')
	.get(packages.read)
	.put(users.requiresLogin, packages.update);
    
    app.route('/packages/new').get(packages.new);
      app.route('/packages/:orderId').get(packages.view);

app.param('packageId', packages.packageByID);


}