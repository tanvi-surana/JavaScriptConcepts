function reverse(str){
    if(str.length<=1)
    {
        console.log(str);
        return str;
    }
    
    return reverse(str.substr(1))+str[0];
}

console.log("The final answer is "+reverse("omega"))