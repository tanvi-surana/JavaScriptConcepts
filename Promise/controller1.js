if(typeof happytrip === "undefined")
{
    happytrip={};
}

happytrip.controller={
    httpRequest:null,
    createAjaxObject:function()
    {
        var promise=new Promise(function(resolve,reject){
        var httprequest=new XMLHttpRequest();
        httprequest.open('GET','https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=1qn1n28qup6qko2gh96ebv3l',true);
        httprequest.send();
        httprequest.onload=function()
        {
            if(httprequest.status == 200)
            {
                resolve(httprequest.response);
            }
            else
            {
                reject(Error(httprequest.statusText));
            }
        }
        
        
        httprequest.onerror=function(){
            reject(Error("Error requesting data"))
        }
        
        
      });
        
        return promise;    
      
    }
}
