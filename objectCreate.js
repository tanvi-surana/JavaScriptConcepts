/*Ways to create objects*/

//First way
var object=new Object();
object.firstName="test1";
object.lastName="test11";

console.log(object);

//second way

var object2={
    firstName:'test2',
    lastName:'test22',
    fullName:function()
    {
        return this.firstName;
    }
}


//Object level functions created using __proto__

object2.__proto__.full=function()
{
    return this.firstName+'-'+this.lastName;
}

console.log(object2);
console.log(object2.fullName());


//Third way

function CustomerObject()
{
    this.firstName='test3';
    this.lastName='test33';
//privileged method    
//    this.fullname=function()
//    {
//        return this.firstName;
//    }
}


//http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

//class level object use prototype

CustomerObject.prototype.fullName=function()
{
    return this.firstName+' '+this.lastName;
}

var object3=new CustomerObject();
console.log(object3);
console.log(object3.fullName());



function CustomerObject1()
{
    this.firstName='test31';
    this.lastName='test331';
    //the variable below acts like a private data member
    var name=this.firstName+'-'+this.lastName
    
    //thus a priviledged method can access a local var above
    this.priviledgedMethod=function()
    {
        return name;
    }
}

//http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/

//class level object use prototype
//prototype can access instance variables or the fields.Thus below fails
CustomerObject1.prototype.fullName=function()
{
    return name;
}

var object31=new CustomerObject1();
console.log(object31);
console.log("This doesn't print anything "+object31.fullName());
console.log(object31.priviledgedMethod());



class Employee
{
    constructor(fname,lname)
    {
        this.firstName=fname;
        this.lastName=lname;
    }
    
    getData()
    {
        console.log("first name is "+this.firstName+" last name is "+this.lastName);
    }
}

var object4=new Employee("tanvi","surana");
object4.getData()


class Employee1
{
    constructor()
    {
        this.firstName="";
        this.lastName="";
    }
    
   get getFirstName(){
       return this.firstName;
   }
    
    set setFirstName(val){
        this.firstName=val;
    }
    
    
    get getLastName(){
       return this.lastName;
   }
    
    set setLastName(val){
        this.firstName=val;
    }
}

var object41=new Employee1();
object41.setFirstName="testing";
console.log(object41.getFirstName);



//Third and fourth we can create objects


