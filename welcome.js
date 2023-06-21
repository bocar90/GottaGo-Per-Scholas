// function register() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     localStorage.setItem("firstName", firstName);
//     localStorage.setItem("lastName", lastName);
//     localStorage.setItem("email",email);
//     localStorage.setItem("password", password);
// }

function validate(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    localStorage.setItem("email",email);
    // let emailReg = localStorage.getItem("email");
    // let passwordReg = localStorage.getItem("password");

    if(email == "bocarsock5@gmail.com" && password == "123"){
        alert("Login successfully!");
        window.open("/pages/landing.html");
    }else{
        alert("Incorrect email or password!");
    } 
}

function message(){
    alert("Message sent!");
}

function request() {
    window.open("/pages/serviceRequest.html");
}

// function display(){
//     // Retrieve input values
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var phone = document.getElementById("phone").value;
//     var pickup = document.getElementById("pickup").value;
//     var dropoff = document.getElementById("dropoff").value;
//     var date = document.getElementById("date").value;
//     var time = document.getElementById("time").value;

//     // Store input values in an array or object
//     var formData = {
//         name: name,
//         email: email,
//         phone: phone,
//         pickup: pickup,
//         dropoff: dropoff,
//         date: date,
//         time: time
//     };

//     // Save the form data to localStorage or send it to the server
//     localStorage.setItem("formData", formData);
//     // Redirect to the other HTML page
//     window.location.href = "/pages/profile.html";
// }

