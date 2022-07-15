let userJWT
const base_url = "https://oauth2.googleapis.com/tokeninfo?id_token=";

function handleCredentialResponse(data) {
    
    // console.log(data);
    // alert(data);
    fetchUserDetails(data["credential"])
    window.location.assign("../Charts/Charts.html");
    
}

function fetchUserDetails(cred) {
    const xhr = new XMLHttpRequest();
    const url = base_url + cred;
    xhr.open("GET", url);
    xhr.send(); 
    
    xhr.onreadystatechange = (e) => { 
        if(xhr.readyState === XMLHttpRequest.DONE){
            console.log(xhr.responseText);
            const parsedResponse = JSON.parse(xhr.response);
            // window.alert(parsedResponse);
            // window.alert("User " + parsedResponse["given_name"] + " " + parsedResponse["family_name"] + " logged in!")
            localStorage.setItem("email", parsedResponse["email"]);
            localStorage.setItem("name", parsedResponse["name"]);
            // window.alert(parsedResponse["name"]);
            localStorage.setItem("given_name", parsedResponse["given_name"]);
            localStorage.setItem("family_name", parsedResponse["family_name"]);

        }
    }
    
}