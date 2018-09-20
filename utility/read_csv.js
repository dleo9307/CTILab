var fs = require("fs");

module.exports=function(filePath){

    var data = fs.readFileSync(filePath, {encoding: "utf8"});
    var rows = data.split("\n");
    var result = [];

    for (var rowIndex in rows) {
        var row = rows[rowIndex].split(",");

        if (rowIndex === "0") { var columns = row; } 
  
        else {
            var data = {}; 
            for (var columnIndex in columns) {
                var column = columns[columnIndex];
                data[column] = row[columnIndex];
            }
            result.push(data);
        }
    }

    return result;
}







