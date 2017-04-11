'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../public/views/about-us.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.contact = function(req, res) {
	res.render('./../public/views/contact-us.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.package = function(req, res) {
	res.render('./../public/views/package.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.pricing = function(req, res) {
	res.render('./../public/views/pricing.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.services = function(req, res) {
	res.render('./../public/views/services.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.customer = function(req, res) {
	res.render('./../public/views/customer.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.howitworks = function(req, res) {
	res.render('./../public/views/how-it-works.ejs', {
		user: req.user || null,
		request: req
	});
};
exports.whychooseus = function(req, res) {
	res.render('./../public/views/why-choose-us.ejs', {
		user: req.user || null,
		request: req
	});
};

