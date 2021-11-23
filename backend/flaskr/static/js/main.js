
function back(){
    var path = document.getElementById("Login");
    path.innerHTML = `<input type = "submit" value = "Sign In" onclick="login();"/>
    <input type = "submit" value = "Sign Up" onclick="registration();"/>`;
}

function registration(){
    var path = document.getElementById("Login");
    path.innerHTML = `
        <form action = "/API/registration" method = "POST">
            <p> First Name : <input type = "text" name = "firstName" /></p>
            <p> Last Name : <input type = "text" name = "lastName" /></p>
            <p> Username : <input type = "text" name = "username" /></p>
            <p> Password : <input type = "password" name = "password" /></p>
            <p><input type = "submit" value = "Back" onclick="back();"/> <input type = "submit" value = "Submit" /></p>
        </form> `;
}

function login(){
    var path = document.getElementById("Login");
    path.innerHTML = `
        <form action = "/API/login" method = "POST">
            <p> Login : <input type = "text" name = "Login" /></p>
            <p> Password : <input type = "password" name = "password" /></p>
            <p><input type = "submit" value = "Back" onclick="back();"/> <input type = "submit" value = "Submit" /></p>
         </form> `;
}