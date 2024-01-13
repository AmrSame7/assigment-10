

function displayData() {

    let listItem =JSON.parse( localStorage.getItem("list"))

    
    
    document.getElementById("message").innerHTML = listItem[0];
    
}


displayData();