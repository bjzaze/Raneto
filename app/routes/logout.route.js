
'use strict';

function route_logout (req, res, next) {
  req.session.loggedIn = false;
  res.redirect('/login');
}

// Exports
module.exports = route_logout;
