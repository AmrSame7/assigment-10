
var userName = document.getElementById('userName')

var userEmail = document.getElementById('userEmail')

var userPassword = document.getElementById('userPassword')

var btnSignUp = document.getElementById('sign-up')




var userslist=[];
if(localStorage.getItem('users')!= null ){
    userslist=JSON.parse ( localStorage.getItem("users"))
    }

function getData() { 
    var user={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value
    }
    if(userName.value=="" || userEmail.value=="" || userPassword.value==""){
        document.getElementById("alertwaring").classList.remove('d-none')
        document.getElementById("alertSuccess").classList.add('d-none')
    }
    else{
        userslist.push(user)  
        localStorage.setItem("users", JSON.stringify(userslist))
        document.getElementById("alertSuccess").classList.remove('d-none')
        document.getElementById("alertwaring").classList.add('d-none')
        
    }

 
}

btnSignUp.addEventListener("click" , function(){
    getData()})



    






