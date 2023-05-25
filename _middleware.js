// pages/_middleware.js
export function middleware(req, res, next) {
	req.locals = req.locals || {};
	req.locals.lang = req.headers['accept-language'];
	return next();
}
