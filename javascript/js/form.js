
function validation(){
    var a= document.getElementById("uname").value;
    var b = document.getElementById("uemail").value;
    var c = document.getElementById("upass").value;
    var d = document.getElementById("ucpass").value;
    var isValid = true; // Flag to check overall validity


    document.getElementById("usname").innerText = "";
    document.getElementById("usemail").innerText = "";
    document.getElementById("uspass").innerText ="";
    document.getElementById("cuspass").innerText ="";

    // User Validation

    if (a==""){
        document.getElementById("usname").innerText = "Please Enter User Name*";
        isValid = false;
    }
    else if(!isNaN(a)){
        document.getElementById("usname").innerText = "Number Are Not Allowed";
        isValid = false;
    }
    else if (a.length<3 || a.length>15){
        document.getElementById("usname").innerText = "User Name Length Between 3-15 Characters";
        isValid = false;
    }

    // Email validation

    if (b==""){
        document.getElementById("usemail").innerText = "Please Enter Email Adderss";
        isValid = false;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(b)){
        document.getElementById("usemail").innerText = "Enter a valid email address.";
        isValid = false;
    }

    //Password Validation

    if (c == "") {
        document.getElementById("uspass").innerText = "Please Enter Password.";
        isValid = false;
    } 

    else if (c.length<8){
        document.getElementById("uspass").innerText = "Password must be at least 8 characters.";
        isValid = false;
    }


    // confirm password

    if (d == ""){
        document.getElementById("cuspass").innerText = "Please ENter Password";
        isValid = false;
    }
    else if (d!=c){
        document.getElementById("cuspass").innerText = "Password Don't Match"
        isValid = false;
    }
    else if (d.length<8){
        document.getElementById("uspass").innerText = "Password must be at least 8 characters.";
        isValid = false;
    }

    
    // Final Submission Check
    if (isValid) {
        alert("Form submitted successfully!\nUsername: " + a + "\nEmail: " + b);
        document.getElementById("uform").reset(); // Clear the form after submission
    }

       
}