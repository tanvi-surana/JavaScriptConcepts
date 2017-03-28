var a=function()
{
   var myValue = 0;
	return{
			increment: function(inc){
				myValue+=typeof inc == 'number' ? inc:1
			},
			getValue:function(){	
				return myValue;
			}
		}

														
}();

console.log(a.getValue())
