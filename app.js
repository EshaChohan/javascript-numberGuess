
 var correctNum = 15
 
 function checkOut(){
    var num =document.getElementById("number").value;
   
if (num == correctNum){
    document.getElementById('result').innerHTML = "Congratulations!!! You Put Correct Number"
}
else if (num <=20 && num>=10) {
    document.getElementById('result').innerHTML = "You Are In A Series, Try One More Time"}
    else if(!num){
        document.getElementById('result').innerHTML = "Please Enter Number First"
    }
    else if (num > 25 || num <0){
        document.getElementById('result').innerHTML = "Please Enter Number Between 0 - 25"
    }
 else {
    document.getElementById('result').innerHTML = "You Are Out Of Series"
}
return
 }
 