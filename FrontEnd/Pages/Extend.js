document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("first_name").value = localStorage.getItem("given_name");
    document.getElementById("last_name").value = localStorage.getItem("family_name");
    document.getElementById("email").value = localStorage.getItem("email");
    var url2 = 'http://localhost:4006/days/'+localStorage.getItem("email");
    fetch(url2).then(response => response.json()).then(json => {
        document.getElementById("days_left").value = json[0].daysleft;
    })
})

//Moves user to Charts page
function back(){
    // window.location.assign("../Charts/Charts.html")
    window.location.assign("Charts.html")
}

let z = 0;
//extend days and show new days remaining
function extend(){
    var url1 = 'http://localhost:4006/days/'+localStorage.getItem("email");
    fetch(url1).then(response => response.json()).then(json => {
        console.log(json)
        var y = json[0].daysleft
        var x = Number(document.getElementById("extend_days").value);
        z = x+y; 
        var url = 'http://localhost:4006/upd/'+localStorage.getItem("email")+'/'+localStorage.getItem("given_name")+'/'+localStorage.getItem("family_name")+'/'+z;
        fetch(url);
        fetch(url1).then(response => response.json()).then(json => {
            document.getElementById("days_left").value = json[0].daysleft;
            location.reload();
        })
    })
    

}

//set extend plan days to 0
function cancel(){
    document.getElementById("days_left").value = 0;
    var url = 'http://localhost:4006/upd/'+localStorage.getItem("email")+'/'+localStorage.getItem("given_name")+'/'+localStorage.getItem("family_name")+'/0';
    fetch(url);
}