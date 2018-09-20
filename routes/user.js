var child_process = require('child_process');
var read_util = require('../utility/read_csv');
var path = require('path');
var exec = child_process.exec;
var filePath = path.join(__dirname, '../public/cars.csv');
var csv_data = read_util(filePath);
var temp={};

module.exports = function(router){

    
    router.all('/',function(req,res){
        res.render('main');
    });

    

    router.route('/process').post(function(req,res){
        for(var i=0; i<csv_data.length; i++){
            var cmd ='rscript C:/Users/이대현/Desktop/CTILab/public/process.R '+csv_data[i].number+" "+csv_data[i].speed+" "+csv_data[i].dist;
           
            exec(cmd, (error, stdout, stderr) => {
                if(error) {
                    console.error(error);
                    return;
                }
            });
        }    
        res.send("<h2>정상처리됨</h2>");
    });

}

