module.exports = function(app, path){

    app.get('/server/list', function(req, res){
        res.sendFile('servers.ejs', {
 root: path.join(__dirname, '../views/')
        });
    });


    app.get('/server/example', function(req, res){
        res.sendFile('server.ejs', {
 root: path.join(__dirname, '../views/')
        });
    });
}
