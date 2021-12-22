

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
            <p> Email : <input type = "text" name = "email" /></p>
            <p> Password : <input type = "password" name = "password" /></p>
            <p><input type = "submit" value = "Submit" /></p><input type = "submit" value = "Back" onclick="back();"/>
        </form> `;
}

function login(){
    var path = document.getElementById("Login");
    path.innerHTML = `
        <form action = "/API/login" method = "POST">
            <p> Login : <input type = "text" name = "Login" /></p>
            <p> Password : <input type = "password" name = "password" /></p>
            <p><input type = "submit" value = "Submit" /></p><input type = "submit" value = "Back" onclick="back();"/>
         </form> `;
}

function getForms(){
    var User = document.getElementById("nameUser");
    User = User.textContent;
    User = User.substring(8,);

    var URL = "API/getForms/" + User;

    $.ajax({
        type: "POST",
        url: URL,
        contentType: "application/json; charset=utf-8",
        dataType: 'json' ,
    }).done(function(data) {
        var path = document.getElementById("Forms");
        var size = data['length'];
        console.log(size);
        /*for(var i=0; i < size; i++){
            path.innerHTML += `
                <p> ${data[i]} </p>
            `;
        }*/
        
        console.log(data);
    });
}