module.exports = function(app, path){

    app.get('/lib/css/auth.css', function(req, res){
        res.sendFile('auth.css', {
 root: path.join(__dirname, '../lib/css/')
        });
    });


    app.get('/lib/css/server.css', function(req, res){
        res.sendFile('server.css', {
 root: path.join(__dirname, '../lib/css/')
        });
    });

    app.get('/lib/css/servers.css', function(req, res){
        res.sendFile('servers.css', {
 root: path.join(__dirname, '../lib/css/')
        });
    });

}