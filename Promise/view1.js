if(typeof happytrip === "undefined")
{
    happytrip={};
}


window.onload=init;
function init()
{
    happytrip.view.display();
}

happytrip.view={
    display:function()
    {
         var promise=happytrip.controller.createAjaxObject();
         promise.then(function(data){
             happytrip.model=data;
             callback();
         },
         function(err){
            console.log("rejected") 
         })
    }
}

function callback()
{
    console.log(happytrip.model);
    
    var arr=happytrip.model;
    console.log("Printing the array")
    createTable(JSON.parse(arr));
    //console.log(arr);
    
}


function createTable(arr)
{
    console.log(arr.Data);
    var myTable=arr.Data;
    var col=["ID","Name","Type"];
    // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.setAttribute('border',2);
        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myTable.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myTable[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
}