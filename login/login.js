var dbl=document.getElementById("password");
dbl.addEventListener("dblclick",function(){
    if(password.type=="password"){
        password.type="text";
        password.style.backgroundColor="red"
    }
    else{
        password.type="password"
        password.style.backgroundColor="#e8edfa"

    }
})

var form=document.getElementById("login-form")
console.log(form)
