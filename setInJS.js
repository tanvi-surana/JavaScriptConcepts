var loanSet = new Set([347,346,5378]);
var fixedSet = new Set([347,4543,54654,438435]);

var result=new Set([...loanSet,...fixedSet]);
console.log(result);

var interResult=new Set(
    [...loanSet].filter(x => fixedSet.has(x))
);

console.log(interResult);


//var newResult=new Set(
//    [...loanSet].filter((v,i,a) => a.indexOf(v) == -1);
//)

console.log(newResult);