var map = new Map([
    [123,"test1"],
    [456,"test2"],
    [789,"test3"]
])

result=Array.from(map);
console.log(result);

for(i in result)
{
    for(j in i)
    {
        console.log(result[i][j]);
    }
}


for(var [key,value] of map)
{
    console.log(key+"-------"+value);
}

for(var key of map.keys())
{
    console.log(key);
}

for(var v of map.values())
{
    console.log(v);
}


var map1 = new Map();
map1.set(1)="abc";
map1.set(2)="def";
map1.set(3)="ghi";


//get,delete,set