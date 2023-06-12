var tacheService = require('./tacheService');

var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await tacheService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createTacheControllerFn = async (req, res) => 
{
    var status = await tacheService.createTacheDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Tache created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating tache" });
    }
}

var updateTacheController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await tacheService.updateTacheDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "Tache Updateeeedddddd"} );
     } else {
         res.send({ "status": false, "message": "Tache Updateeeedddddd Faileddddddd" });
     }
}

var deleteTacheController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await tacheService.removeTacheDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Tache Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "Tache Deleteddd Faileddddddd" });
     }
}
module.exports = { getDataConntrollerfn, createTacheControllerFn,updateTacheController,deleteTacheController };