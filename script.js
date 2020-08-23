var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

var ahello="Hello"
var bgoodbye="Good bye"

for(var name in names)
{
	var name1=names[name]
	var firstword=name1[0]
	if( firstword=="J" || firstword=="j")
	{
		console.log(ahello +" "+ name1);
	}
	else
	{
		console.log(bgoodbye + " "+ name1);
	}
}
