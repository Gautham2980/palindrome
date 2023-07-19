var a=prompt("Enter the Number")
var b=0;
var c;
var temporary=a;

while(a>0){
	c=a%10;
	b=b*10+c;
	a=parseInt(a/10);
}

if(b==temporary){
	document.write(b+"is palindrome");
}
else{
	document.write(b+"is not palindrome");
}
