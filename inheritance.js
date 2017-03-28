function GuestUser(ipAddress)
{
    this.location=ipAddress;
}


function Account(bal)
{
    this.balance=bal;
}

function RegisteredUser(ipAddress,name,email,passwd)
{
    GuestUser.call(this,ipAddress)
    this.userName=name;
    this.email=email;
    this.password=passwd;
}

//Registered user is a guest user
//Guest user= new RegisteredUser
 
RegisteredUser.prototype=new GuestUser();
var object=new RegisteredUser('127.0.0.1','tanvi','tanvisurana20@gmail.com','testPass');
console.log(object);


//multiple inheritance.This is not possible in ES6
function RegisteredUser2(ipAddress,bal,name,email,passwd)
{
    GuestUser.call(this,ipAddress);
    Account.call(this,bal);
    this.userName=name;
    this.email=email;
    this.password=passwd;
}

//inheritance
RegisteredUser2.prototype=new GuestUser();
RegisteredUser2.prototype=new Account();

var objMultipleInh = new RegisteredUser2('127.0.0.1',1000,'Tanvi','tanvisurana20@gmail.com','test');
console.log("The multiple inheritance testing "+objMultipleInh);




//ECMA6
//Multilevel Inheritance
class User
{
    constructor(ipaddr)
    {
        this.ipAddress=ipaddr;
    }
}

class RegisteredUser1 extends User
{
    constructor(ipaddr,name,email,password)
    {
        super(ipaddr);
        this.userName=name;
        this.email=email;
        this.password=password;
    }
}

var obj=new RegisteredUser1('192.168.1.1','Tan','abc@email.com','testPass');
console.log(obj);

class Passenger extends RegisteredUser1
{
    constructor(ipaddr,name,email,password,pnrNo)
    {
        super(ipaddr,name,email,password);
        this.pnrNo=pnrNo;
    }
}

var obj1=new Passenger('192.168.1.1','Tan','abc@email.com','testPass','abcdefgh');
console.log(obj1);


//Hiearchical Inheritance

/*class GoldenUser extends User
{
    constructor()
}*/