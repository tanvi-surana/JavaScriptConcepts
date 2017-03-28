if(typeof happytrip === "undefined")
{
    happytrip={};
}

happytrip.controller={
    httpRequest:null,
    createAjaxObject:function()
    {
            try{
               this.httpRequest=new XMLHttpRequest();
            }
            catch(e)
            {
                try{
                    this.httpRequest=new ActiveXObject("Msxml2.XMLTTP3.0");
                }
                catch(e){
                    console.log("Ajax object couldn't be created")
                    return false;
                }
            }

    this.httpRequest.open('GET','https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=1qn1n28qup6qko2gh96ebv3l',true);
    this.httpRequest.send(null);//send is used when we use a post method, therefore here it is NULL
    this.httpRequest.onreadystatechange=callbackResponse;
    }
}

function callbackResponse()
{
    if((happytrip.controller.httpRequest.readyState == 4)&&(happytrip.controller.httpRequest.status == 200))
    {
       // console.log(happytrip.controller.httpRequest.responseText);
        happytrip.model=happytrip.controller.httpRequest.responseText;
        //console.log(happytrip.model);
    }
}