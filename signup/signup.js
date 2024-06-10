// var confirmation=document.getElementById("confirmation")
// // console.log(confirmation)
// // console.log(confirmation.innerText)
// var submit=document.getElementById("submit")
// // console.log(submit)
// submit.addEventListener("click",function(){
//     confirmation.innerText="successful";
//     confirmation.style.color="green"
// })

// var myform=document.getElementById("myform").addEventListener("submit",function(e){
//         e.preventDefault();
//         alert("form is submited");
// })

let myform=document.getElementById("myform");
// console.log(myform)
var submit=document.getElementById("submit")
var confirmation=document.getElementById("confirmation")
// var inputs=document.getElementsByTagName("input")
// console.log(inputs)


myform.addEventListener("submit",function(e){
e.preventDefault();

    submit.addEventListener("click",function(){
        var inputs=document.querySelectorAll(".input")
        // var inputs=document.getElementsByTagName("input")
        inputs.forEach(function(e){
            if(e.innerText==null){ // Check if value is null
                confirmation.innerText = "sorry"; // Set text to "sorry"
                confirmation.style.color = "red"; // Set text color to red
            } else {
                confirmation.innerText = "successful"; // Set text to "successful"
                confirmation.style.color = "green"; // Set text color to green
            }
            console.log(e); // Output the element to the console
        })  
    })

})
