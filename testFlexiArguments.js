function test()
{
    for(i=0;i<arguments.length;i++)
    {
        console.log(arguments[i]);
    }
}


test(1);
test(1,3,5,7,2,4,6,8);


//testing varargs
//varargs are called restParams in JS
function restParam(... data)
{
    console.log(data.join(','));
}

restParam(new Array('a','b','c'));
