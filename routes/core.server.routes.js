'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/about').get(core.about);
	app.route('/contact').get(core.contact);
	app.route('/package').get(core.package);
	app.route('/pricing').get(core.pricing);
	app.route('/service').get(core.services);
	app.route('/index').get(core.index);
	app.route('/customer').get(core.customer);
	app.route('/howitworks').get(core.howitworks);
	app.route('/whychooseus').get(core.whychooseus);
};
