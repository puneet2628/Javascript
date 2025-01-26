// function addition(){
//     let a=document.getElementById("first").value;
//     let b=document.getElementById("second").value;
//     let c = a + b
//     documnet.getElementById("output").innerHTML= c;
// }



function addition() {
    let a= document.getElementById("first").value;
    let b= document.getElementById("second").value;
    let c= Number(a) + Number(b);
   
    document.getElementById("ans").value=c;

 }

 function subtraction(){
    let a= document.getElementById("first").value;
    let b= document.getElementById("second").value;
    let c= Number(a) - Number(b);
   
    document.getElementById("ans").value=c;

 }

 function multiplication(){
    let a= document.getElementById("first").value;
    let b= document.getElementById("second").value;
    let c= Number(a) * Number(b);
   
    document.getElementById("ans").value=c;
 }

 function division(){
    let a= document.getElementById("first").value;
    let b= document.getElementById("second").value;
    let c= Number(a) / Number(b);
   
    document.getElementById("ans").value=c;
 }