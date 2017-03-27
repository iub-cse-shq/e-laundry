module.exports = function(app){

 var orders = require('./../controllers/orders.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/orders')
	.get(orders.list)
	.post(orders.create);

  app.route('/api/orders/:orderId')
	.get(orders.read)
  .delete(users.requiresLogin, orders.delete);

	app.route('/api/orders/edit/:orderId')
	.get(orders.read)
	.put(users.requiresLogin, orders.update);
    
    app.route('/orders/new').get(orders.new);
      app.route('/orders/:orderId').get(orders.view);

app.param('orderId', orders.orderByID);


}
