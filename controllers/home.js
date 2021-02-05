exports.home = function(req, res, next) {
    res.render('home', { title: 'Express' });
}