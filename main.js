// alert("hello");
// var hi="srija";
// var a=3;
// var b=30;
// console.log(a*b,hi );

// function validate(x,y) {
//     result=(x*y);
// }
// validate(20, 40);
// console.log(result);

// const name="srija";
// function validate() {
//     husName="sai";
// }
// validate();
// console.log(husName);
// var name="chicken";
//
// if(name === "srija") {
//     console.log("name is equal");
// }else{
//     console.log("not equal");
// }
function validate() {
var enterName =document.getElementById("nameSrija").value;
if(enterName ===""){
    document.getElementById("nameError").style.display="block";
}
var enterFullName=document.getElementById("fullName").value;

    if(enterName ==="" || enterFullName===""){
        //alert("Please fill the form");
    }else{
        //alert("thank you for submitting the form");
    }
}

