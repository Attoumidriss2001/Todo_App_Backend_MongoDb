var tacheModel = require('./tacheModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        tacheModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createTacheDBService = (tacheDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var tacheModelData = new tacheModel();
 
        tacheModelData.title = tacheDetails.title;
        tacheModelData.description = tacheDetails.description;
        tacheModelData._status = tacheDetails._status;

        tacheModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateTacheDBService = (id,tacheDetails) => {     
    console.log(tacheDetails);
    return new Promise(function myFn(resolve, reject) {
        tacheModel.findByIdAndUpdate(id,tacheDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeTacheDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        tacheModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }