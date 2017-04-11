var mongoose = require('mongoose');
var Package = require('./../models/Package.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Package.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
	console.log(req.body.area);
  var package = new Package(req.body);
  
  package.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

exports.new = function(req, res) {
	res.render('./../public/views/package/create.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.view = function(req, res) {
	res.render('./../public/views/package/view.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.read = function(req, res) {
  res.json(req.package);
};


exports.delete = function(req, res) {
	var package = req.package;
	package.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(package);
		}
	});
};


module.exports.update = function(req, res) {
  var package = req.package;

  	package = _.extend(package, req.body);

  	package.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(package);
  		}
  	});
};

exports.packageByID = function(req, res, next, id) {
	Package.findById(id).populate('user', 'email').exec(function(err, package) {
		if (err) return next(err);
		if (!package) return next(new Error('Failed to load order ' + id));
		req.package = package;
		next();
	});
};

