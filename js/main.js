
 var btnLogin = document.getElementById("btnLogin");

 var email = document.getElementById("email");

 var password = document.getElementById("password");

 var list =[];

function matchData(){


  let data = JSON.parse (localStorage.getItem("users"))

  for (let i = 0; i < data.length; i++) {
    
    if (data[i].email == email.value && data[i].password ==password.value) {
      
    list.push(`${data[i].name}`)
    localStorage.setItem("list", JSON.stringify(list))
    window.location.href = "./page.html"
    
    }
    else{
      document.getElementById("alert").classList.remove("d-none")
      
    }
    if (email.value =="" || password.value == "") {
      document.getElementById("alertwaring").classList.remove("d-none")
      document.getElementById("alert").classList.add("d-none")
      
      
    }
    else{
      document.getElementById("alertwaring").classList.add("d-none")
      
    }
  }

 
 
}

btnLogin.addEventListener('click', function(){
    matchData()
})



