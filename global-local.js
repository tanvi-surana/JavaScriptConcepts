window.onload=init;



var x=500;

function testGlobalScope()
{
    console.log("The global scope is "+x);
}

function testLocalScope()
{
     var x=300;
    console.log("The local scope is "+x);
}

function testData()
{
    console.log("Data",data);
    var arr=['Delhi','West Bengal'];
    for(let i=0;i<2;i++)
    {
        console.log(arr[i]);
    }
}

//nesting the scope

var outer=function()
{
    var outerData=2;
    function inner()
    {
        console.log("outer data: ",outerData);
    }
    
    outer.inner=inner;
}

var outer1=function()
{
    var outerData=2;
    function inner()
    {
        console.log("outer data: ",outerData);
    }
    
    return inner;
}


function init()
{
    testGlobalScope();
    testLocalScope();
    outer();
    outer.inner();
    var x=outer1();
    x();
    
}

