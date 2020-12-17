module.exports = function(app, path){

    app.get('/auth/login', function(req, res){
        res.sendFile('login.ejs', {
 root: path.join(__dirname, '../views/')
        });
    });

    app.get('/auth/logout', function(req, res){
        res.sendFile('signout.ejs', {
 root: path.join(__dirname, '../views/')
        });
    });

}