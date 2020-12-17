module.exports = function(app, path){

    app.get('/lib/js/header.js', function(req, res){
        res.sendFile('header.js', {
 root: path.join(__dirname, '../lib/js/')
        });
    });


    app.get('/lib/css/server.js', function(req, res){
        res.sendFile('server.js', {
 root: path.join(__dirname, '../lib/js/')
        });
    });

    app.get('/lib/css/servers.js', function(req, res){
        res.sendFile('servers.js', {
 root: path.join(__dirname, '../lib/js/')
        });
    });

}