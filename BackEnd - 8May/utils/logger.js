const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`); // this logs the HTTP method and URL of the request
    next(); // Call the next middleware or route handler
}

module.exports = logger; // Export the logger middleware function